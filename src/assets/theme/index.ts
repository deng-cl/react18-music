// import { DefaultTheme } from "styled-components" // -- theme 类型支持

const theme = {
    color: {
        primary: "#000000",
        secondary: "#9867da",
        hover_bg: "#372a3c",
        active: "#5e5e5e",
        button_bg: "#5e5e5e",
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

export type CustomTheme = typeof theme // -- 获取当前 them 类型 --> 在自定义类型文件（styled.d.ts）中配置对应 DefaultTheme 类型 --> 使其后续在样式中使用是可以有更好的支持

export default theme
