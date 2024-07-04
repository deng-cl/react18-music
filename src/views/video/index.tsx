import { memo } from "react"
import type { ReactNode, FC } from "react"
import { VideoWrapper } from "./style"

interface IProps {
    children?: ReactNode
}

const Video: FC<IProps> = () => {
    return <VideoWrapper>Video</VideoWrapper>
}

export default memo(Video)
