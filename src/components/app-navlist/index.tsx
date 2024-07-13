import { memo } from "react"
import type { ReactNode, FC } from "react"
import { NavListWrapper } from "./style"

import logoDark from "@/assets/icon/logo/logo-dark.png"
import logoLight from "@/assets/icon/logo/logo-light.png"
import NavSectionList from "./c-cpns/section-list"
import NAV_LIST_DATA from "./data-config"
import { appShallowEqual, useAppSelector } from "@/store/app-react-redux"

interface IProps {
    children?: ReactNode,
}

const AppNavList: FC<IProps> = () => {
    const { isDark } = useAppSelector(state => ({
        isDark: state.theme.isDark
    }), appShallowEqual)

    return (
        <NavListWrapper>
            <div className="logo">
                <img src={isDark ? logoDark : logoLight} alt="logo" />
            </div>

            <div className="nav-list">
                <NavSectionList NavListData={NAV_LIST_DATA} />
            </div>
        </NavListWrapper>
    )
}

export default memo(AppNavList)
