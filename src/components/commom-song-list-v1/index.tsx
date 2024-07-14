import { memo, useState } from "react"
import type { ReactNode, FC } from "react"
import { SongListV1Wrapper } from "./style"
import CommomPaganition from "../commom-paganition"
import SongItem from "@/views/discover/c-cpns/song-item"
import { playSongListAction } from "@/views/player/store/module/player"
import { useAppDispatch } from "@/store/app-react-redux"
import lodash from "lodash"

interface IProps {
    title: string
    paginationConfig: {
        defaultPageSize: number
        total: number
    },
    songListInfo: any,
}

const CommomSongListV1: FC<IProps> = (props: IProps) => {
    const { title, paginationConfig, songListInfo } = props

    const dispatch = useAppDispatch()

    const [curPageCode, setCurPageCode] = useState(0)

    const changePageCodeHandle = (pageCode: number) => { // -- 页码跳转
        setCurPageCode(pageCode - 1) // -- 因为 curPageCode 存储的为索引从 0 开始 --> 所以需要减 1
    }

    const playSongListEntire = lodash.throttle(() => { // -- 播放列表所有歌曲
        const songList = songListInfo?.tracks
        if (songList) dispatch(playSongListAction(songList))
    }, 1000)

    return (
        <SongListV1Wrapper>
            <div className="song-list">
                <div className="title">
                    <span>
                        {title || "默认歌单列表标题"}
                        <div className="count">歌曲数量: {songListInfo?.tracks?.length}</div>
                    </span>
                    <div className="play-entire btn" onClick={playSongListEntire}>播放全部</div>
                </div>

                <div className="list">
                    {
                        (function () {
                            const sliceStart = curPageCode * paginationConfig.defaultPageSize
                            const sliceEnd = sliceStart + paginationConfig.defaultPageSize
                            return (
                                songListInfo?.tracks?.slice(sliceStart, sliceEnd).map((item: any) => (
                                    <div className="item" key={item.id}>
                                        <SongItem songInfo={item} />
                                    </div>
                                ))
                            )
                        })()
                    }
                </div>

                <CommomPaganition
                    defaultCurrent={1}
                    defaultPageSize={paginationConfig.defaultPageSize}
                    total={paginationConfig.total}
                    onChange={changePageCodeHandle}
                />
            </div>
        </SongListV1Wrapper>
    )
}

export default memo(CommomSongListV1)
