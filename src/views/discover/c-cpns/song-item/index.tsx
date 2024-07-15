import { memo, useEffect } from "react"
import type { FC } from "react"
import { ItemWrapper } from "./style"
import { formatTime, joinSongArtistNames } from "@/utils"
import IconPlayerV2 from "@/assets/icon/player/icon-player-v2"
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux"
import { fetchPlaySongInfoAction } from "@/views/player/store/module/player"
import lodash from "lodash"
import classNames from "classnames"

interface IProps {
    songInfo: any,
    height?: number
}

const SongItem: FC<IProps> = (props: IProps) => {
    const { songInfo, height = 40 } = props

    const dispatch = useAppDispatch()

    const { currentSong } = useAppSelector(state => ({ // -- player state
        currentSong: state.player.currentSong
    }), appShallowEqual)

    const playerSong = lodash.throttle((id: number) => { // -- 防抖
        dispatch(fetchPlaySongInfoAction(id))
    }, 600)

    return (
        <ItemWrapper $height={height} onClick={e => {
            if (currentSong?.id && currentSong?.id === songInfo?.id) return // -- 判断点击播放的是否正在播放
            playerSong(songInfo?.id)
        }}
            className={classNames({ active: currentSong?.id === songInfo?.id })}
        >
            <div className="left">
                <div className="picture">
                    <img src={songInfo?.al?.picUrl} alt="" />
                </div>
                <div className="info">
                    <div className="name single-line">{songInfo?.name}</div>
                    <div className="ars single-line">{joinSongArtistNames(songInfo?.ar)}</div>
                </div>
            </div>
            {/* ar */}
            <div className="center">{songInfo?.al?.name}</div>
            <div className="right">
                <div className="time">{formatTime(songInfo?.dt)}</div>
                <div className="icons">
                    <IconPlayerV2 />
                </div>
            </div>
        </ItemWrapper>
    )
}

export default memo(SongItem)
