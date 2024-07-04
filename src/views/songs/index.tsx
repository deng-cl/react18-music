import { memo } from "react"
import type { ReactNode, FC } from "react"
import { SongsWrapper } from "./style"

interface IProps {
    children?: ReactNode
}

const Songs: FC<IProps> = () => {
    return <SongsWrapper>Songs</SongsWrapper>
}

export default memo(Songs)
