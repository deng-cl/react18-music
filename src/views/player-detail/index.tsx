import { memo } from "react"
import type { ReactNode, FC } from "react"
import { PlayerWrapper } from "./style"

interface IProps {
    children?: ReactNode
}

const PlayerDetail: FC<IProps> = () => {
    return <PlayerWrapper>PlayerDetail</PlayerWrapper>
}

export default memo(PlayerDetail)
