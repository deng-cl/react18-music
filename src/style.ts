import styled from "styled-components";

export const AppWrapper = styled.div`
    position: fixed;
    inset: 0;
    margin: auto;
    display: flex;
    flex-flow: row nowrap;
    color: ${props => props.theme.textColor.primary};
    background-color: ${props => props.theme.color.primary};
    padding:  6px 14px;
    padding-right: 2px;
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

        .show-page-name {
            margin-top: 6px;
            height: 40px;
            /* font-size: ${props => props.theme.textSize.larger}; */
            font-weight: 700;
        }

        .content {
            padding-right: 4px;
            box-sizing: border-box;
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
`
