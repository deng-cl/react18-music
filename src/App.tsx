import { Suspense, memo } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./router"
import AppNavlist from "./components/app-navlist"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"
import { AppWrapper } from "./style"

const App = memo(() => {
    return (
        <AppWrapper className="App">
            <AppNavlist className="main-right" />

            <div className="main-right">
                <AppHeader />
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
