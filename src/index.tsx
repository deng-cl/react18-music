import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import "normalize.css"

import App from "@/App"
import "@/assets/css/index.less"
import store from "./store"


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
// const ThemeProviderExtendType: Theme = ThemeProvider

root.render(
    <HashRouter>
        {/* theme 主题注入移至 App.tsx 组件中进行注入，因为需要根据对应的 state 来切换主题（re-render） */}
        {/* <ThemeProvider theme={theme}> */}
        <Provider store={store}>
            <App />
        </Provider>
        {/* </ThemeProvider> */}
    </HashRouter>
)
