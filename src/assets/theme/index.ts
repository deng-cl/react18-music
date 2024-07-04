import { DefaultTheme } from "styled-components" // -- theme 类型支持

const theme: DefaultTheme = {
    color: {
        primary: "#000000",
        secondary: "#9867da",
        hover_bg: "#372a3c",
    },
    textColor: {
        primary: "#ffffff",
        secondary: "#60656b"
    },
    textSize: {
        larger: "18px", // -- or --> 18px
        normal: "14px",
        small: "12px"
    },
    mixin: {}
}

// 播放器进度条: #252525

export default theme
