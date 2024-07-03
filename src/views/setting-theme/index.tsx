import { memo } from "react"
import type { ReactNode, FC } from "react"

interface IProps {
    children?: ReactNode
}

const SettingTheme: FC<IProps> = () => {
    return <div>SettingTheme</div>
}

export default memo(SettingTheme)
