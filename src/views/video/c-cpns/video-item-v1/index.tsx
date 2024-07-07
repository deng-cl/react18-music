import { memo } from "react"
import type { ReactNode, FC } from "react"
import { ItemWrapper } from "./style"
import { formatCount, formatTime, joinSongArtistNames } from "@/utils"
import IconVideo from "@/assets/icon/player/icon-video"
import { useNavigate } from "react-router-dom"
// import IconVideo from "@/assets/icon/player/icon-video"

interface IProps {
    MVData: any
}

const VideoItemV1: FC<IProps> = (props: IProps) => {
    const { MVData } = props

    const navigate = useNavigate()
    function toMVDetailPgae() {
        navigate("/video-detail/" + MVData?.id)
    }

    return (
        <ItemWrapper onClick={toMVDetailPgae}>
            <div className="album">
                <img src={MVData?.cover} alt="" />
                <div className="al-info">
                    <div className="count">
                        <IconVideo />
                        <span>{formatCount(MVData?.playCount)}</span>
                    </div>

                    <div className="dt">{formatTime(MVData?.mv?.videos?.[0]?.duration)}</div>
                </div>
            </div>
            <div className="info">
                <div className="name">{MVData?.mv?.title}</div>
                <div className="arts">-- {joinSongArtistNames(MVData?.mv?.artists)}</div>
            </div>
        </ItemWrapper>
    )
}

export default memo(VideoItemV1)
