import { memo } from "react"
import type { ReactNode, FC } from "react"
import { PlayerWrapper } from "./style"


interface IProps {
    onBackFun: () => void
}

const Player: FC<IProps> = (props: IProps) => {
    const { onBackFun } = props
    return (
        <PlayerWrapper>
            Player
            <button onClick={onBackFun}>返回</button>
        </PlayerWrapper>
    )
}

export default memo(Player)
