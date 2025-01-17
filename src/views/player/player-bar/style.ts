import styled from "styled-components";

export const PlayerBarWrapper = styled.div`
    position: relative;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 66px;
    padding: 10px 8px;
    box-sizing: border-box;
    background-color: ${props => props.theme.color.primary};
    /* border-top: 1px solid ${props => props.theme.textColor.secondary}; */
    border-top: 1px solid ${props => props.theme.color.button_bg};
    /* ↓ 对子元素的布局 */
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    > .content div {
        height: 100%;
    }

    > .lyric {
        user-select: none;
        position: absolute;
        left: 50%;
        top: -35px;
        transform: translateX(-50%);
        text-align: center;
        height: 30px;
        line-height: 30px;
        background: #6261617a;
        padding: 0 8px;
        border-radius: 3px;
        color: white;

        ${props => props.theme.mixin.singleLineClamp};
    }

    /* control */
    > .control {
        width: 33%;
        user-select: none;
        flex: 1;
        margin: auto;
        max-width:380px;
        min-width: 120px;
        /* background-color: yellow; */
        padding-right: 6px;
        box-sizing: border-box;
    }

    /* operator */
    > .operator {
        display: flex;
        align-items: center;
        user-select: none;
        flex: 1;
        max-width: 320px;
        min-width: 120px;
        justify-content: flex-end;

        &.show {
            transform: translateX(0);
        }

        &.hide {
            transform: translateX(100%);
        }
    }

    > .current-play-menu {
        width: 400px;
        position: absolute;
        top: -302px;
        right: 0;
        transition: all 200ms ease;

        &.show {
            transform: translateX(0);
        }

        &.hide {
            transform: translateX(100%);
        }
    }

    > .toggle-side-operator-show {
        margin-left: auto;
        display: flex;
        justify-content: flex-end;
        align-content: center;
        flex: 1;
        flex-grow: 0.5;
        display: none;

        .icon-btn {
            cursor: pointer;
            user-select: none;
            transition: all 200ms ease;
        }

        &.active {
            .icon {
                fill: #C20C0C;
            }
        }
        .icon {
            fill:${props => props.theme.textColor.primary};

            /* transform: rotate(-90deg); */
        }
    }

// --
    // new
    @media screen and (max-width:520px) { // -- 手机
        > .operator {
            transition: all 200ms ease;
            position: absolute;
            height: 44px;
            top: -50px;
            right: 0px;
            background-color: ${props => props.theme.color.primary};
            border-radius: 4px;
            border: 1px solid ${props => props.theme.color.hover_bg};
            z-index: 2;
        }

        > .current-play-menu {
            top: -355px;
            max-width: calc(80vw - 4px);
            border: 1px solid ${props => props.theme.color.hover_bg};
            box-shadow: -1px 1px 1px 1px ${props => props.theme.color.hover_bg};
        }

        > .toggle-side-operator-show {
            display: flex;
            flex-grow: 0.5;
            min-width: 50px;
            max-width: 120px;
        }

        > .control {
            flex: 1;
            flex-grow: 2;
            display: flex;
            justify-content: center;
            padding: 0;
        }
    }
`

export const InfoWrapper = styled.div` // -- ↑ PlayerBarWrapper info 子元素部分
    flex: 1;
    max-width: 320px;
    min-width: 120px;
    /* background-color: green; */
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;

    > .album {
        flex-shrink: 0;
        width: 45px;
        height: 45px;
        margin-right: 8px;
        background-color: ${props => props.theme.textColor.secondary};
        border-radius: 6px;
        overflow: hidden;
        cursor: pointer;
        img {
            height: 100%;
        }
    }

    > .msg {
        width: calc(100% - 53px);
        padding-right: 4px;
        box-sizing: border-box;
        display: flex;
        flex-flow: column nowrap;
        flex: 0;

        div {
            ${props => props.theme.mixin.singleLineClamp};
        }

        .name {
            font-weight: 700;
            margin-bottom: 5px;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            white-space: nowrap;
        }

        .arts {
            font-size: ${props => props.theme.textSize.small};
            color: ${props => props.theme.textColor.secondary};
        }

        .loding {
            margin-left:4px
        }
    }

// --
    // new
    @media screen and (max-width:520px) { // -- 手机
        flex-grow: 0.5;
        min-width: 50px;
        max-width: 120px;
    }

    @media screen and (max-width:450px) { // -- 手机
        > .msg {
            display: none;
        }
    }
`

export const DetailWrapper = styled.div` // 播放详情页样式
    position: relative;
    z-index: 999;
    // -- CSSTransition style
    .player-enter {
        transform: translateY(100%);
    }
    .player-enter-active {
        transform: translateY(0);
        transition: all 200ms ease;
    }

    .player-exit {
        transform: translateY(0);
    }
    .player-exit-active {
        transform: translateY(100%);
        transition: all 250ms ease;
    }
`
