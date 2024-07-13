// import { DefaultTheme } from "styled-components" // -- theme 类型支持

const dark = {
    color: {
        primary: "#000000",
        secondary: "#9867da",
        hover_bg: "#ffffff1c",
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
        small: "12px",
        v_small: "10px"
    },
    mixin: {
        twoLineClamp: `
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
        `,
        singleLineClamp: `
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap
        `
    }
}

export default dark
