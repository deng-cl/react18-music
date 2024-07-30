import styled from "styled-components";

export const AppWrapper = styled.div`
    position: fixed;
    inset: 0;
    margin: auto;
    display: flex;
    flex-flow: column nowrap;
    color: ${props => props.theme.textColor.primary};
    background-color: ${props => props.theme.color.primary};
    padding:  6px 14px;
    /* 该 padding-bottom 值对应 player-bar 播放器工具栏的高度 */
    padding-bottom: 66px;
    box-sizing: border-box;
    font-size: ${props => props.theme.textSize.normal};

    svg {
        fill: ${props => props.theme.textColor.primary};
    }

    .main-left {
        width: 200px;
        height: 100vh;
        /* 该 padding-bottom 值对应 player-bar 播放器工具栏的高度 */
        padding-bottom: 66px;
        box-sizing: border-box;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 0px;
        }
    }

    .main-right {
        flex: 1;
        /* background-color: orange; */
        overflow-y: auto;
        overflow-x: hidden;
        padding-bottom: 66px;
        box-sizing: border-box;
        padding-right: 2px;

        .show-page-name {
            margin-top: 6px;
            height: 40px;
            line-height: 28px;
            /* font-size: ${props => props.theme.textSize.larger}; */
            font-weight: 700;
        }

        .content {
            /* padding-right: 4px; */
            box-sizing: border-box;
            /* overflow-y: auto; */
        }

        /* 滚动条样式设置 */
        &::-webkit-scrollbar {
            width: 2px;
        }
        &::-webkit-scrollbar-track{
            background-color: ${props => props.theme.color.primary};
        }
        &::-webkit-scrollbar-thumb{
            width: 2px;
            background-color: ${props => props.theme.textColor.primary};
        }
    }

    > .loding-cover {
        position: fixed;
        z-index: 1000;
        inset: 0;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255,255,255,.2);
        cursor: not-allowed;
    }

// -----
    // -- new
    min-width: 348px;

    @media screen and (min-width: 1080px){ // -- 电脑
        flex-flow: row nowrap;
    }

    @media screen and (max-width: 1080px) { // --平板或手机
        .main-left {
            /* position: relative; */
            height: fit-content;
            width: 100%;
            padding-bottom: 0;
        }
    }

    @media screen and (max-width: 520px){ // -- 手机
        padding: 0 4px;

        .main-right {
            padding-right: 4px;
        }
    }
`
