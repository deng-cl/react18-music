import { memo, useEffect, useRef, useState } from "react"
import type { ReactNode, FC } from "react"
import { NavListWrapper } from "./style"

import logoDark from "@/assets/icon/logo/logo-dark.png"
import logoLight from "@/assets/icon/logo/logo-light.png"
import NavSectionList from "./c-cpns/section-list"
import NAV_LIST_DATA from "./data-config"
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux"
import IconNavSwitch from "@/assets/icon/header/icon-nav-switch"
import { changeHideVideoAction, changeHideVideoAsyncAction } from "@/store/modules/video"

interface IProps {
    children?: ReactNode,
}

const AppNavList: FC<IProps> = () => {
    const { isDark, showDetail } = useAppSelector(state => ({
        isDark: state.theme.isDark,
        showDetail: state.player.showDetail
    }), appShallowEqual)

    const dispatch = useAppDispatch()
    const [is_show_nav, set_is_show_nav] = useState(false)

    // -- 处理移动端视频播放顶层问题 -->
    useEffect(() => {
        // dispatch(changeHideVideoAction(is_show_nav)) // -- 当显示 nav 列表时，隐藏视频内容 --> 反之显示
        if (!showDetail) dispatch(changeHideVideoAsyncAction(is_show_nav)) // -- s↑ 替换
    }, [is_show_nav])

    // -- 处理移动端播问题: 当播放详情页在显示时，如果改 navList 导航页在显示那么取消显示 navlist --> 不然播放详情取消显示时，对应的播放器就会显示，就又会造成播放器覆盖 navlist 部分等（因为 navList 与 player-detail 页面都需要控制播放器的显示与隐藏）
    // -- 为了避免该问题所以我们需要让其两个同时只能显示一个
    useEffect(() => {
        if (showDetail) set_is_show_nav(false)
    }, [showDetail])

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
