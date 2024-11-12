import { memo, useCallback, useEffect, useMemo, useRef, useState, } from "react"
import type { ReactNode, FC, Ref } from "react"
import { SongsDetailWrapper } from "./style"
import { useParams } from "react-router-dom"
import { fetchSongsDetailById } from "@/service/modules/songs"
import SongItem from "../discover/c-cpns/song-item"
import { useAppDispatch, useAppSelector } from "@/store/app-react-redux"
import { playSongListAction } from "../player/store/module/player"
import lodash from "lodash"
import { fetchSongInfoById } from "../player/service"
import { changeLoadingAction } from "@/store/modules/main"
import { useVirtualList } from "ahooks"
import SongsDetailInfo from "./song-info/index"
import { Spin } from "antd"
import useIsDistance from "@/hooks/useIsDistance"

interface IProps {
    children?: ReactNode
}

const SongsDetail: FC<IProps> = () => {
    const { id } = useParams() // -- 获取路由跳转传递的参数 --> 歌单 ID
    const dispatch = useAppDispatch()

    const [songsBaseInfo, setSongsBaseInfo] = useState<any>({}) // -- 歌单基本信息
    const [trackIds, setTracksIds] = useState<any[]>([]) // -- 歌单歌曲 id 信息
    const [songListInfo, setSongListInfo] = useState<any[]>([]) // -- 歌单歌曲信息

    const { ispc } = useAppSelector(state => ({
        ispc: state.main.ispc
    }))

    // -- 数据获取...
    useEffect(() => {
        dispatch(changeLoadingAction(true))
        fetchSongsDetailById(id).then((res: any) => {
            const tract = res?.playlist?.trackIds || []
            setSongsBaseInfo(res?.playlist || {})
            setTracksIds(tract)

            const ids = tract.map((item: any) => item.id).join(",") // -- 所有歌曲的 id 参数
            fetchSongInfoById(ids).then((res: any) => { // -- 请求所有歌曲信息
                setSongListInfo(res?.songs || [])
                dispatch(changeLoadingAction(false))
            })
        })
    }, [id])

    const playSongsEntireSong = useCallback(lodash.throttle(() => { // -- 播放歌单所有歌曲 -- 缓存函数
        dispatch(playSongListAction(trackIds))
    }, 1000), [trackIds])

    // new 虚拟列表
    const songList = useMemo(() => songListInfo, [songListInfo])
    const ctnRef = useRef(null)
    const listRef = useRef(null)
    const tempRef = useRef<HTMLDivElement>(null)

    const [list] = useVirtualList(songList, {
        containerTarget: ctnRef,
        wrapperTarget: listRef,
        itemHeight: 40,
        overscan: 8,
    });

    return (
        <SongsDetailWrapper>
            <SongsDetailInfo
                playSongsEntireSong={playSongsEntireSong}
                baseInfo={songsBaseInfo}

            />

            <div className="title" ref={tempRef}>songs</div>

            <div className="songs" ref={ctnRef} style={{
                height: `calc(100vh - ${tempRef.current?.offsetTop ?? 0}px - 100px)`,
            }}>
                <div className="list" ref={listRef}>
                    {
                        list.map((item) => (
                            <div className="item" key={item.data?.id}>
                                <SongItem songInfo={item.data} />
                            </div>
                        ))
                    }
                    <div className="not-more">
                        暂无更多歌曲
                    </div>
                </div>
            </div>
        </SongsDetailWrapper>
    )
}

export default memo(SongsDetail)
