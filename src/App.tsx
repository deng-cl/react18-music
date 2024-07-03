import { Suspense, memo } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./router"

const App = memo(() => {
    return (
        <div className="App">
            <div className="main-left nav-list">nav list</div>

            <div className="main-right">
                <div className="header"></div>
                <div className="content">
                    <Suspense fallback={<h2>loading...</h2>}>
                        <div className="page">
                            {useRoutes(routes)}
                        </div>
                    </Suspense>
                </div>
                <div className="footer"></div>
            </div>
        </div>
    )
})

export default App
// http://codercba.com:9002
