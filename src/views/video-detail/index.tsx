import { memo } from "react"
import type { ReactNode, FC } from "react"

interface IProps {
    children?: ReactNode
}

const VideoDetail: FC<IProps> = () => {
    return <div>VideoDetail</div>
}

export default memo(VideoDetail)
