import { memo } from "react"
import type { ReactNode, FC } from "react"
import { VideoDetailWrapper } from "./style"

interface IProps {
    children?: ReactNode
}

const VideoDetail: FC<IProps> = () => {
    return <VideoDetailWrapper>VideoDetail</VideoDetailWrapper>
}

export default memo(VideoDetail)
