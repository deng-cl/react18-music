import { memo, useContext, useEffect, useState, useTransition } from "react"
import type { ReactNode, FC, Ref } from "react"
import { SongsDetailWrapper } from "./style"
import { redirect, useParams } from "react-router-dom"
import { fetchSongsDetailById } from "@/service/modules/songs"
import * as dayjs from 'dayjs'
import SongItem from "../discover/c-cpns/song-item"
import { useAppDispatch } from "@/store/app-react-redux"
import { playSongListAction } from "../player/store/module/player"

import lodash from "lodash"
import { fetchSongInfoById } from "../player/service"
import { changeLoadingAction } from "@/store/modules/main"
import usePageScrollInfo from "@/hooks/usePageScrollInfo"
import { AppContext } from "@/App"
import { Spin } from "antd"

interface IProps {
    children?: ReactNode
}

const INITAL_DISPLAY_SONG_COUNT = 12

const SongsDetail: FC<IProps> = () => {
    const { id } = useParams() // -- 获取路由跳转传递的参数 --> 歌单 ID
    const dispatch = useAppDispatch()

    const [songsBaseInfo, setSongsBaseInfo] = useState<any>({}) // -- 歌单基本信息
    const [trackIds, setTracksIds] = useState<any[]>([]) // -- 歌单歌曲 id 信息
    const [songListInfo, setSongListInfo] = useState<any[]>([]) // -- 歌单歌曲信息

    const [offset, setOffset] = useState(INITAL_DISPLAY_SONG_COUNT) // -- 当前展示歌曲偏移量

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchSongsDetailById(id).then((res: any) => {
            setSongsBaseInfo(res?.playlist || {})
            setTracksIds(res?.playlist?.trackIds || [])
        })
    }, [])

    useEffect(() => { // -- ↑ 拿到所有歌曲 id ，请求对应的歌曲信息
        const ids = trackIds.map(item => item.id).join(",") // -- 所有歌曲的 id 参数
        dispatch(changeLoadingAction(true))
        fetchSongInfoById(ids).then((res: any) => { // -- 请求所有歌曲信息
            dispatch(changeLoadingAction(false))
            setSongListInfo(res?.songs || [])
        })
    }, [trackIds])

    const playSongsEntireSong = lodash.throttle(() => { // -- 播放歌单所有歌曲
        dispatch(playSongListAction(trackIds))
    }, 1000)


    // -- 监听页面滚动距离 --> 挂载更多歌曲进行展示
    const { pageRef } = useContext(AppContext) as any
    const { scrollY, scrollable, removeListenerRef } = usePageScrollInfo(pageRef)
    const [pending, startTransition] = useTransition() // -- 用于对于某部分任务的更新优先级较低 --> 延迟更新 --> 优先更新完其它的先
    useEffect(() => {
        if (songListInfo.length === 0) return

        if (offset >= songListInfo.length) {
            if (removeListenerRef.current) removeListenerRef.current() // -- 取消 scroll 的监听 --> 性能优化
            console.log("END");
            return
        }

        const distancedSize = scrollable - scrollY // -- 计算距离底部的距离

        setLoading(true)
        if (distancedSize < 50) {
            setOffset(offset + INITAL_DISPLAY_SONG_COUNT)

            startTransition(() => { // -- 降低更新优先级 --> 等待 DOM 更新完后，再设置该 loading 为 false --> 即: DOM更新完后，再取消显示 loading
                setLoading(false)
            })
        }
    }, [scrollY, scrollable])

    return (
        <SongsDetailWrapper>
            <div className="info">
                <div className="album">
                    <img src={songsBaseInfo?.coverImgUrl} alt="" />
                </div>
                <div className="songs-info">
                    <div className="name">{songsBaseInfo?.name}</div>
                    <div className="author">
                        <img src={songsBaseInfo?.creator?.avatarUrl} alt="" />
                        <div className="at-name">{songsBaseInfo?.creator?.nickname}</div>
                        {/* <div className="at-name">{songsBaseInfo?.creator?.signature}</div> */}
                    </div>
                    <div className="tags">
                        {
                            songsBaseInfo?.tags?.map((item: string, index: number) => (
                                <div className="tag" key={index}>{item}</div>
                            ))
                        }
                    </div>
                    <div className="description">
                        {songsBaseInfo?.description}

                    </div>

                    <div className="player">
                        <div className="_">
                            <div className="btn" onClick={playSongsEntireSong}>播放</div>
                            <div className="count">歌曲总数: {songsBaseInfo?.trackCount}</div>
                        </div>
                        <div className="c-t">创建时间: {
                            (function () {
                                let parseCreateTime = dayjs?.unix(songsBaseInfo?.createTime / 1000) as any
                                const { $y, $M, $D } = parseCreateTime
                                return $y + "/" + ($M + 1) + "/" + $D
                            })()
                        }</div>
                    </div>
                </div>
            </div>

            <div className="songs">
                <div className="title">songs</div>
                <div className="list">
                    {
                        songListInfo.slice(0, offset).map((item: any) => (
                            <div className="item" key={item.id}>
                                <SongItem songInfo={item} />
                            </div>
                        ))
                    }
                </div>
            </div>

            {
                loading && (
                    <div className="loading">
                        <Spin size="small" />
                    </div>
                )
            }

            {
                songListInfo.length > 0 && offset > songListInfo.length && (
                    <div className="not-more">
                        暂无更多歌曲
                    </div>
                )
            }
        </SongsDetailWrapper>
    )
}

export default memo(SongsDetail)
