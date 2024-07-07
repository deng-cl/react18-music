import { memo } from "react"
import type { ReactNode, FC } from "react"
import { ItemWrapper } from "./style"
import type { ISongs } from "@/store/modules/discover"
import { useNavigate } from "react-router-dom"

interface IProps {
    songsInfo: ISongs,
    width?: number | string
    height?: number | string
}

const SongsItemV1: FC<IProps> = (props: IProps) => {
    const { songsInfo, width = 130, height = 130 } = props

    const navigate = useNavigate()
    function songsClickHandle() { // -- 点击歌单出来函数 --> 进入对应歌单的详情页
        navigate("/songs-detail/" + songsInfo.id)
    }

    return (
        <ItemWrapper style={{ width, height }} onClick={songsClickHandle}>
            <div className="albun">
                <img src={songsInfo?.picUrl} alt={songsInfo.name} />
            </div>

            <div className="name">{songsInfo.name}</div>
        </ItemWrapper>
    )
}

export default memo(SongsItemV1)

