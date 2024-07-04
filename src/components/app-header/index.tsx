import { memo } from "react"
import type { ReactNode, FC } from "react"
import { HeaderWrapper } from "./style"

interface IProps {
    children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
    return <HeaderWrapper>AppHeader</HeaderWrapper>
}

export default memo(AppHeader)
