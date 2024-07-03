import { memo } from "react"
import type { ReactNode, FC } from "react"

interface IProps {
    children?: ReactNode
}

const Discover: FC<IProps> = () => {
    return <div>Discover</div>
}

export default memo(Discover)
