import { memo, useRef, useState } from "react"
import type { ReactNode, FC } from "react"
import { NavListWrapper } from "./style"

import logoDark from "@/assets/icon/logo/logo-dark.png"
import logoLight from "@/assets/icon/logo/logo-light.png"
import NavSectionList from "./c-cpns/section-list"
import NAV_LIST_DATA from "./data-config"
import { appShallowEqual, useAppSelector } from "@/store/app-react-redux"
import IconNavSwitch from "@/assets/icon/header/icon-nav-switch"

interface IProps {
    children?: ReactNode,
}

const AppNavList: FC<IProps> = () => {
    const { isDark } = useAppSelector(state => ({
        isDark: state.theme.isDark
    }), appShallowEqual)

    const [is_show_nav, set_is_show_nav] = useState(false)

    return (
        <NavListWrapper>
            <div className="logo">
                <img src={isDark ? logoDark : logoLight} alt="logo" />
                <div className="show-nav" onClick={e => set_is_show_nav(!is_show_nav)}
                // style={{
                //     transform: `rotate(${is_show_nav ? "180deg" : "0"})`
                // }}
                >
                    <IconNavSwitch width={30} height={30} />
                </div>
            </div>

            <div className="nav-list" style={{
                transform: `translateX(${is_show_nav ? "0" : "-100%"})`
            }}>
                <NavSectionList NavListData={NAV_LIST_DATA} set_is_show_nav={set_is_show_nav} />
            </div>
        </NavListWrapper>
    )
}

export default memo(AppNavList)
