import { memo } from "react"
import type { ReactNode, FC } from "react"
import { ItemWrapper } from "./style"
import type { ISongs } from "@/store/modules/discover"

interface IProps {
    songsInfo: ISongs,
    width?: number | string
    height?: number | string
}

const SongsItemV1: FC<IProps> = (props: IProps) => {
    const { songsInfo, width = 130, height = 130 } = props

    return (
        <ItemWrapper style={{ width, height }}>
            <div className="albun">
                <img src={songsInfo?.picUrl} alt={songsInfo.name} />
            </div>

            <div className="name">{songsInfo.name}</div>
        </ItemWrapper>
    )
}

export default memo(SongsItemV1)

