import { Suspense, createContext, memo, useEffect, useRef } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./router"
import AppNavlist from "./components/app-navlist"
import AppHeader from "./components/app-header"
import { AppWrapper } from "./style"
import usePageName from "./hooks/usePageName"
import AppFooter from "./components/app-footer"
import PlayerBar from "./views/player/player-bar"
import { useAppDispatch } from "./store/app-react-redux"
import { fetchPlaySongInfoAction } from "./views/player/store"

export const AppContext = createContext({}) // -- 通过 React 中的 Context 进行对应函数的传递

const App = memo(() => {
    const pagename = usePageName() // -- 获取当前页面名称

    // -- ↓ 为后代元素注入 pageRef 对象 --> 使其可以操作该 page 元素（目前主要用于操作滚动太到顶部）
    const pageRef = useRef<HTMLElement>()

    return (
        <AppWrapper className="App">
            <div className="main-left">
                <AppNavlist />
            </div>

            <div className="main-right" ref={pageRef as any}>
                <AppHeader />
                <div className="show-page-name">{pagename}</div>
                <div className="content">
                    <AppContext.Provider value={{ pageRef }}>
                        <Suspense fallback={<h2>loading...</h2>}>
                            <div className="page">
                                {useRoutes(routes)}
                            </div>
                        </Suspense>
                    </AppContext.Provider>
                </div>
                <AppFooter />
            </div>

            {/* player bar: 播放器工具栏 */}
            <PlayerBar />
        </AppWrapper>
    )
})

export default App
