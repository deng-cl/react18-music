const light = {
    color: {
        primary: "#ffffff",
        secondary: "#9867da",
        hover_bg: "#71717114",
        active: "#71717136",
        button_bg: "#7171711c",

    },
    textColor: {
        primary: "#000000",
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

// 播放器进度条: #252525

export default light
