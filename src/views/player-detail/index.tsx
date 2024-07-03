import { memo } from "react"
import type { ReactNode, FC } from "react"

interface IProps {
    children?: ReactNode
}

const PlayerDetail: FC<IProps> = () => {
    return <div>PlayerDetail</div>
}

export default memo(PlayerDetail)
