import { memo } from "react"
import type { ReactNode, FC } from "react"
import { SongsDetailWrapper } from "./style"

interface IProps {
    children?: ReactNode
}

const SongsDetail: FC<IProps> = () => {
    return <SongsDetailWrapper>SongsDetail</SongsDetailWrapper>
}

export default memo(SongsDetail)
