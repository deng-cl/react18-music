import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import "normalize.css"

import App from "@/App"
import "@/assets/css/index.less"
import store from "./store"
import theme from "./assets/theme"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <HashRouter>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </HashRouter>
)
