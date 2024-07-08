import { memo, useEffect, useState } from "react"
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

interface IProps {
    children?: ReactNode
}

const VideoDetail: FC<IProps> = () => {
    const { id } = useParams()
    const [MVInfo, setMVInfo] = useState<any>({})

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
    }, [id])


    // -- 获取 MV 评论信息
    const [sortType, setSortType] = useState<number>(3)
    const [MVCommentList, setMVCommentList] = useState<any>([])
    const [commentPage, setCommentPage] = useState<number>(0)
    useEffect(() => {
        (async () => { // -- fetch MV comment list
            const commentCOunt = MVOtherInfo.commentCount || 1000
            const res = await fetchMVCommentsById(id as any, sortType, commentCOunt) as any
            setMVCommentList(res?.data?.comments)
        })();
    }, [sortType, id])
    function changeCommentSortType(sortType: number) {
        setCommentPage(0)
        setSortType(sortType)
    }


    // -- 处理相关视频的点击
    const navigate = useNavigate()
    function toNewMVDetail(id: number) {
        navigate("/video-detail/" + id)
    }

    return (
        <VideoDetailWrapper>
            <div className="left">
                <div className="base-info flex-row">
                    <div className="title">{MVInfo?.name}</div>
                    <div className="other flex-row">
                        <div className="count flex-row">
                            <IconVideo />
                            <span>{formatCount(MVInfo?.playCount)}</span>
                        </div>
                        <div className="comment-count flex-row">
                            <IconComment />
                            <span>{formatCount(MVOtherInfo.commentCount)}</span>
                        </div>
                        <div className="favo flex-row">
                            <IconStar />
                            <span>{formatCount(MVOtherInfo.likedCount)}</span>
                        </div>
                        <div className="share flex-row">
                            <IconShare width={14} height={14} />
                            <span>{formatCount(MVOtherInfo.shareCount)}</span>
                        </div>
                        <div className="ct flex-row">
                            <IconTime />
                            <span>{MVInfo?.publishTime}</span>
                        </div>
                    </div>
                </div>

                <div className="v-main">
                    <video src={MVPlayerURL} autoPlay={true} controls></video>
                </div>

                <div className="comment-list">
                    <div className="top flex-row">
                        <div className="title">评论</div>
                        <div className="count">{formatCount(MVOtherInfo.commentCount)}</div>
                        <div className="sort flex-row">
                            {
                                (() => {
                                    const fields = ["推荐", "热度", "时间"]
                                    return fields.map((item, index: number) => (
                                        <div className="item flex-row" key={item}>
                                            <div
                                                className={classNames("btn", { active: (index + 1) === sortType })}
                                                onClick={e => changeCommentSortType(index + 1)}
                                            >{item}</div>
                                            {index !== 2 && "|"}
                                        </div>
                                    ))
                                })()
                            }
                        </div>
                    </div>
                    <div className="list">
                        {
                            (() => {
                                const sliceStart = commentPage * 16
                                const sliceEnd = sliceStart + 16
                                return (
                                    MVCommentList?.slice(sliceStart, sliceEnd)?.map((item: any, index: number) => (
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
                        total={MVCommentList?.length || 0}
                        onChange={(pageCount => { setCommentPage((pageCount - 1)) })}
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
