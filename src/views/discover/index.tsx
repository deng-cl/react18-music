import { memo } from "react"
import type { ReactNode, FC } from "react"
import { DiscoverWrapper } from "./style"

interface IProps {
    children?: ReactNode
}

const Discover: FC<IProps> = () => {
    return <DiscoverWrapper>Discover</DiscoverWrapper>
}

export default memo(Discover)
