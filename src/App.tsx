import { Suspense, createContext, memo, useEffect, useRef } from "react"
import { RouteObject, useLocation, useRoutes } from "react-router-dom"
import routes, { IRoutesPath } from "./router"
import AppNavlist from "./components/app-navlist"
import AppHeader from "./components/app-header"
import { AppWrapper } from "./style"
import usePageName from "./hooks/usePageName"
import AppFooter from "./components/app-footer"
import PlayerBar from "./views/player/player-bar"
import { appShallowEqual, useAppDispatch, useAppSelector } from "./store/app-react-redux"
import { Spin } from "antd"
import { ThemeProvider } from "styled-components"
import THEME from "./assets/theme"
import { changeShowPlayListAction, changeShowVolumeControlAction } from "./views/player/store/module/audio-operator"
import { PaginationGlobalWrapper } from "./components/commom-paganition/style"
import lodash from "lodash"
import usePageScrollInfo from "./hooks/usePageScrollInfo"

export const AppContext = createContext({}) // -- 通过 React 中的 Context 进行对应函数的传递

const App = memo(() => {
    const pagename = usePageName() // -- 获取当前页面名称

    const dispatch = useAppDispatch()
    const location = useLocation()

    const NOT_FOOTER_ROUTE_PATHS: IRoutesPath[] = ["/theme"] // -- 配置哪些页面不需要显示 footer 页面

    const { loading, isDark, showVolumeControl, showPlayList } = useAppSelector(state => ({
        loading: state.main.loading,
        isDark: state.theme.isDark,
        showVolumeControl: state.audioOperator.showVolumeControl,
        showPlayList: state.audioOperator.showPlayList
    }), appShallowEqual)

    // -- ↓ 为后代元素注入 pageRef 对象 --> 使其可以操作该 page 元素（目前主要用于操作滚动太到顶部）
    const pageRef = useRef<HTMLDivElement>(null)

    const handlePlayerBarContent = () => {  // -- 点击非 PlayerBar 页面部分，取消显示对应音量控件与歌曲列表展示部分
        if (showVolumeControl) dispatch(changeShowVolumeControlAction(false))
        if (showPlayList) dispatch(changeShowPlayListAction(false))
    }

    return (
        <ThemeProvider theme={isDark ? THEME.dark : THEME.light}>
            <PaginationGlobalWrapper>
                <AppWrapper className="App">
                    <div className="main-left" onClick={handlePlayerBarContent}>
                        <AppNavlist />
                    </div>

                    <div className="main-right" ref={pageRef} onClick={handlePlayerBarContent}>
                        <AppHeader />
                        <div className="show-page-name">{pagename}</div>
                        <div className="content" >
                            <AppContext.Provider value={{ pageRef }}>
                                <Suspense fallback={<h2>loading...</h2>}>
                                    <div className="page">
                                        {useRoutes(routes)}
                                    </div>
                                </Suspense>
                            </AppContext.Provider>
                        </div>
                        {/* {
                                NOT_FOOTER_ROUTE_PATHS.includes(location.pathname as IRoutesPath) ? undefined : <AppFooter />
                            } */}
                    </div>

                    {/* player bar: 播放器工具栏 */}
                    <PlayerBar />

                    {/* loading --> cover */}
                    {
                        loading && <div className="loding-cover">
                            <Spin />
                        </div>
                    }
                </AppWrapper>
            </PaginationGlobalWrapper>
        </ThemeProvider>
    )
})

export default App
