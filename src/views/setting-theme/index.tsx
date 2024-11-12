import { memo, useRef } from "react"
import type { ReactNode, FC } from "react"
import { ThemeWrapper } from "./style"
import IconNight from "@/assets/icon/ot/icon-night"
import IconSunny from "@/assets/icon/ot/icon-sunny"
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux"
import { changeThemeIsDarkAction } from "@/store/modules/theme"
import { CSSTransition, SwitchTransition } from "react-transition-group"

interface IProps {
    children?: ReactNode
}

const SettingTheme: FC<IProps> = () => {

    const diapatch = useAppDispatch()

    const { isDark } = useAppSelector(state => ({
        isDark: state.theme.isDark
    }), appShallowEqual)

    const changeTheme = () => diapatch(changeThemeIsDarkAction(!isDark)) // -- setich theme

    return (
        <ThemeWrapper>
            <div className="theme">
                <div className="name">{isDark ? "Dark Mode" : "Light Mode"}</div>
                <div className="switch" onClick={changeTheme}>
                    <div className="dot" style={{
                        transform: `translateX(${isDark ? 0 : 28}px)`
                    }}>
                        <SwitchTransition mode="out-in">
                            <CSSTransition key={isDark} timeout={150} unmountOnExit>
                                {
                                    isDark ? <IconNight width={30} height={30} /> : <IconSunny width={30} height={30} />
                                }
                            </CSSTransition>
                        </SwitchTransition>
                    </div>
                </div>
            </div>
        </ThemeWrapper>
    )
}

export default memo(SettingTheme)
