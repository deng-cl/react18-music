import { memo } from "react"
import type { ReactNode, FC } from "react"
import { NavListWrapper } from "./style"

import logoDark from "@/assets/icon/logo/logo-dark.png"
import NavSectionList from "./c-cpns/section-list"
import NAV_LIST_DATA from "./data-config"

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
                <NavSectionList NavListData={NAV_LIST_DATA} />
            </div>
        </NavListWrapper>
    )
}

export default memo(AppNavList)
