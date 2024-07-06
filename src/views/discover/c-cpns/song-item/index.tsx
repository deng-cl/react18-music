import { memo, useEffect } from "react"
import type { FC } from "react"
import { ItemWrapper } from "./style"
import { formatTime, joinSongArtistNames } from "@/utils"
import IconPlayerV2 from "@/assets/icon/player/icon-player-v2"

interface IProps {
    songInfo: any,
    height?: number
}

const SongItem: FC<IProps> = (props: IProps) => {
    const { songInfo, height = 40 } = props

    return (
        <ItemWrapper $height={height}>
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
