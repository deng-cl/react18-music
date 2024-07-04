import { memo } from "react"
import type { ReactNode, FC } from "react"
import { ThemeWrapper } from "./style"

interface IProps {
    children?: ReactNode
}

const SettingTheme: FC<IProps> = () => {
    return <ThemeWrapper>SettingTheme</ThemeWrapper>
}

export default memo(SettingTheme)
