import { Suspense, memo, useEffect } from "react"
import { useLocation, useRoutes } from "react-router-dom"
import routes from "./router"
import AppNavlist from "./components/app-navlist"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"
import { AppWrapper } from "./style"
import usePageName from "./hooks/usePageName"

const App = memo(() => {
    const pagename = usePageName() // -- 获取当前页面名称

    return (
        <AppWrapper className="App">
            <div className="main-left">
                <AppNavlist />
            </div>

            <div className="main-right">
                <AppHeader />
                <div className="show-page-name">{pagename}</div>
                <div className="content">
                    <Suspense fallback={<h2>loading...</h2>}>
                        <div className="page">
                            {useRoutes(routes)}
                        </div>
                    </Suspense>
                </div>
                <AppFooter />
            </div>
        </AppWrapper>
    )
})

export default App
