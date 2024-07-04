import { memo } from "react"
import type { ReactNode, FC } from "react"
import { NavListWrapper } from "./style"

import logoDark from "@/assets/icon/logo/logo-dark.png"
import NavSection from "./c-cpns/section"
import { HomeNavItems, SettingNavItems } from "./data-config"

interface IProps {
    children?: ReactNode,
}

const AppNavList: FC<IProps> = () => {
    return (
        <NavListWrapper>
            <div className="logo">
                <img src={logoDark} alt="logo" />
            </div>

            <div className="nav-list">
                <NavSection sectionData={HomeNavItems} />
                <NavSection sectionData={SettingNavItems} />
            </div>
        </NavListWrapper>
    )
}

export default memo(AppNavList)
