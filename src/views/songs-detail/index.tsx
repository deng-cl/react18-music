import { memo } from "react"
import type { ReactNode, FC } from "react"

interface IProps {
    children?: ReactNode
}

const SongsDetail: FC<IProps> = () => {
    return <div>SongsDetail</div>
}

export default memo(SongsDetail)
