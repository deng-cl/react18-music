import { memo } from "react"
import type { ReactNode, FC } from "react"
import { ItemWrapper } from "./style"
import { IVersionItem } from "../.."

interface IProps {
    itemData: IVersionItem
}

const VersionItem: FC<IProps> = (props: IProps) => {
    const { itemData } = props

    return (
        <ItemWrapper>
            <div className="v-number">{itemData.vNumber}</div>
            <div className="desc">{itemData.desc}</div>
            <div className="time">{itemData.date}</div>
        </ItemWrapper>
    )
}

export default memo(VersionItem)
