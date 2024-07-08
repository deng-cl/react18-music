import { memo } from "react"
import type { ReactNode, FC } from "react"
import { PlayerWrapper } from "./style"

interface IProps {
    children?: ReactNode
}

const Player: FC<IProps> = () => {
    return <PlayerWrapper>Player</PlayerWrapper>
}

export default memo(Player)
