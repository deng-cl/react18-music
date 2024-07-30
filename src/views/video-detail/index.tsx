import { memo, useContext, useEffect, useRef, useState } from "react"
import type { ReactNode, FC } from "react"
import { VideoDetailWrapper } from "./style"
import { useNavigate, useParams } from "react-router-dom"
import { type IMVInfo, fetchMVDetailById, fetchMVInfoById, fetchMVPlayerURLById, fetchMVCommentsById, fetchSimiMVById } from "@/service/modules/video"
import { formatCount, formatTime, joinSongArtistNames } from "@/utils"
import IconVideo from "@/assets/icon/player/icon-video"
import IconComment from "@/assets/icon/player/icon-comment"
import IconStar from "@/assets/icon/header/icon-star"
import IconShare from "@/assets/icon/player/icon-share"
import IconTime from "@/assets/icon/player/icon-time"
import CommomPaganition from "@/components/commom-paganition"
import classNames from "classnames"
import { AppContext } from "@/App"
import { useAppDispatch } from "@/store/app-react-redux"
import { changeLoadingAction } from "@/store/modules/main"

interface IProps {
    children?: ReactNode
}

const VideoDetail: FC<IProps> = () => {
    const { id } = useParams()
    const [MVInfo, setMVInfo] = useState<any>({})

    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => { // -- Fetch MV Detail Info
            const res = await fetchMVDetailById(id as any) as any
            setMVInfo(res.data)
        })();
    }, [id])


    // -- 获取视频播放 URL & 获取视频其它信息（收藏、点赞、评论）
    const [MVPlayerURL, setMVPlayerURL] = useState<string>("")
    const [MVOtherInfo, setMVOtherInfo] = useState<IMVInfo>({ likedCount: 0, shareCount: 0, commentCount: 0 })
    const [MVSimiMVS, setMVSimiMVS] = useState<any>([])
    useEffect(() => {
        (async () => { // -- fetch MV player URL
            const res = await fetchMVPlayerURLById(id as any) as any
            setMVPlayerURL(res?.data?.url)
        })();

        (async () => { // -- fetch MV info
            const res = await fetchMVInfoById(id as any) as IMVInfo
            setMVOtherInfo(res)
        })();

        (async () => { // -- fetch MV simi MVS
            const res = await fetchSimiMVById(id as any) as any
            setMVSimiMVS(res.mvs)
        })();

        console.log(MVPlayerURL);

    }, [id])

    // -- 获取 MV 评论信息
    const [sortType, setSortType] = useState<number>(3)
    const [MVCommentList, setMVCommentList] = useState<any>([])
    const [commentTotal, setCommentTotal] = useState(0)
    const [commentPage, setCommentPage] = useState<number>(0)
    const cursor = useRef<any>(null)
    useEffect(() => {
        (async () => { // -- fetch MV comment list
            dispatch(changeLoadingAction(true))

            let cursorParam: any = null
            if (sortType === 3) {
                cursorParam = !cursor.current?.includes("normalHot") ? cursor.current : null
            }

            const res = await fetchMVCommentsById(id as any, sortType, 16, commentPage + 1, cursorParam) as any
            cursor.current = res?.data?.cursor
            setMVCommentList(res?.data?.comments)
            setCommentTotal(res?.data?.totalCount)
            dispatch(changeLoadingAction(false))
        })();
    }, [sortType, id, commentPage])
    function changeCommentSortType(sortType: number) {
        setCommentPage(0)
        setSortType(sortType)
    }


    // -- 处理相关视频的点击
    const navigate = useNavigate()
    function toNewMVDetail(id: number) {
        navigate("/video-detail/" + id)
    }

    // -- 切换 comment 分页时，将对应 page 滚动到对应的位置 <评论页面发生改变，动态计算内容所需滚动距离>
    const leftContentRef = useRef<HTMLElement>() // -- 1. 获取左侧 .left Dom 元素
    const commentRef = useRef<HTMLElement>() // --  2. 获取 .left 中的 .comment-list Dom 元素 --> 通过 .left 元素高度减去当前评论高度，即可得到评论分页后所要滚动的距离
    const { pageRef } = useContext(AppContext) as any// -- 3. 获取对应的 App.tsx 中的 page 内容 Dom 元素，进行滚动条的滚动
    function changeCommentPageCode(pageCode: number) { // -- 4. 在修改对应 comment 页面时，进行相应的滚动
        setCommentPage(pageCode) // -- 修改页面

        // -- ↓ 进行相应的滚动
        const baseHeight = leftContentRef.current?.clientHeight ?? 0
        const commentHeight = commentRef.current?.clientHeight ?? 0
        const scrollSize = baseHeight - commentHeight
        // console.log(baseHeight, commentHeight, scrollSize);
        pageRef?.current?.scrollTo(0, scrollSize) // -- 进行相应的滚动
    }

    return (
        <VideoDetailWrapper>
            <div className="left" ref={leftContentRef as any}>
                <div className="base-info flex-row" >
                    <div className="title">{MVInfo?.name}</div>
                    <div className="other flex-row">
                        <div className="count flex-row">
                            <IconVideo />
                            <span>{formatCount(MVInfo?.playCount)}</span>
                        </div>
                        <div className="favo flex-row">
                            <IconStar />
                            <span>{formatCount(MVOtherInfo.likedCount)}</span>
                        </div>
                        <div className="share flex-row">
                            <IconShare width={14} height={14} />
                            <span>{formatCount(MVOtherInfo.shareCount)}</span>
                        </div>
                        <div className="comment-count flex-row">
                            <IconComment />
                            <span>{formatCount(MVOtherInfo.commentCount)}</span>
                        </div>
                        <div className="ct flex-row">
                            <IconTime />
                            <span>{MVInfo?.publishTime}</span>
                        </div>
                    </div>
                </div>

                <div className="v-main">
                    <video src={MVPlayerURL} autoPlay={true} controls x5-video-player="h5"></video>
                </div>

                <div className="comment-list" ref={commentRef as any}>
                    <div className="top flex-row">
                        <div className="title">评论</div>
                        <div className="count">{formatCount(MVOtherInfo.commentCount)}</div>
                        <div className="sort flex-row">
                            {
                                (() => {
                                    const fields = ["热度", "时间"]
                                    return fields.map((item, index: number) => (
                                        <div className="item flex-row" key={item}>
                                            <div
                                                className={classNames("btn", { active: (index + 2) === sortType })}
                                                onClick={e => changeCommentSortType(index + 2)}
                                            >{item}</div>
                                            {index !== 1 && "|"}
                                        </div>
                                    ))
                                })()
                            }
                        </div>
                    </div>
                    <div className="list">
                        {
                            (() => {

                                return (
                                    MVCommentList?.map((item: any, index: number) => (
                                        <div className="item" key={index}>
                                            <div className="user flex-row">
                                                <img src={item.user.avatarUrl} alt="" />
                                                <div className="name">{item.user.nickname}</div>
                                            </div>

                                            <div className="content flex-row">
                                                <span>{item.content}</span>
                                                <div className="t">{item.timeStr}</div>
                                            </div>

                                        </div>
                                    ))
                                )
                            })()
                        }
                    </div>
                    <CommomPaganition
                        defaultCurrent={1}
                        defaultPageSize={16}
                        current={commentPage + 1}
                        total={commentTotal}
                        onChange={(pageCount => changeCommentPageCode(pageCount - 1))}
                    />
                </div>
            </div>

            <div className="right">
                <div className="title">相关视频</div>
                <div className="list">
                    {
                        MVSimiMVS.map((item: any) => (
                            <div className="item flex-row" key={item.id} onClick={e => toNewMVDetail(item.id)}>
                                <div className="album">
                                    <img src={item.cover} alt="" />
                                    <div className="t">{formatTime(item.duration)}</div>
                                </div>

                                {/* 当窗口过小，不显示 info 时，显示该 name */}
                                <div className="name-not-info">{item.name}</div>

                                <div className="info">
                                    <div className="name">{item.name}</div>
                                    <div className="arts">{joinSongArtistNames(item.artists)}</div>
                                    <div className="count flex-row">
                                        <IconVideo />
                                        <span>{formatCount(item.playCount)}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </VideoDetailWrapper >
    )

}

export default memo(VideoDetail)
