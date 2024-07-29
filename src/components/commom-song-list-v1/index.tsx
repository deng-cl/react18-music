import { memo, useContext, useEffect, useState } from "react"
import type { ReactNode, FC } from "react"
import { SongListV1Wrapper } from "./style"
import CommomPaganition from "../commom-paganition"
import SongItem from "@/views/discover/c-cpns/song-item"
import { playSongListAction } from "@/views/player/store/module/player"
import { useAppDispatch } from "@/store/app-react-redux"
import lodash from "lodash"
import KeepAlive from "react-activation"
import { AppContext } from "@/App"
import usePageScrollInfo from "@/hooks/usePageScrollInfo"
import useIsDistance from "@/hooks/useIsDistance"
import { Spin } from "antd"

interface IProps {
    title: string
    songListInfo: any,
}

const CommomSongListV1: FC<IProps> = (props: IProps) => {
    const { title, songListInfo, } = props

    const dispatch = useAppDispatch()


    const playSongListEntire = lodash.throttle(() => { // -- 播放列表所有歌曲
        const songList = songListInfo
        if (songList) dispatch(playSongListAction(songList))
    }, 1000)

    // -- 监听页面滚动距离 --> 挂载更多歌曲进行展示
    const { offset, loading } = useIsDistance(songListInfo?.length ?? 0)

    return (
        <SongListV1Wrapper>
            <div className="song-list">
                <div className="title">
                    <span>
                        {title || "默认歌单列表标题"}
                        <div className="count">歌曲数量: {songListInfo?.length}</div>
                    </span>
                    <div className="play-entire btn" onClick={playSongListEntire}>播放全部</div>
                </div>


                <div className="list">
                    {
                        songListInfo?.slice(0, offset).map((item: any, index: number) => (
                            <div className="item" key={index}>
                                <SongItem songInfo={item} />
                            </div>
                        ))
                    }

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

            </div>
        </SongListV1Wrapper>
    )
}

export default memo(CommomSongListV1)
