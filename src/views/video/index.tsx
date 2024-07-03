import { memo } from "react"
import type { ReactNode, FC } from "react"

interface IProps {
    children?: ReactNode
}

const Video: FC<IProps> = () => {
    return <div>Video</div>
}

export default memo(Video)
