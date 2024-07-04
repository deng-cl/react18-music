import { memo } from "react"
import type { ReactNode, FC } from "react"
import { NavListWrapper } from "./style"

interface IProps {
    children?: ReactNode,
    className?: string
}

const AppNavList: FC<IProps> = () => {
    return <NavListWrapper>AppNavList</NavListWrapper>
}

export default memo(AppNavList)
