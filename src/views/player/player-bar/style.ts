import styled from "styled-components";

export const PlayerBarWrapper = styled.div`
    position: relative;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 66px;
    padding: 10px 8px;
    box-sizing: border-box;
    background-color: ${props => props.theme.color.primary};
    border-top: 1px solid ${props => props.theme.textColor.secondary};
    /* ↓ 对子元素的布局 */
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

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
        border-radius: 3px
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
`

export const ControlWrapper = styled.div` // -- ↑ PlayerBarWrapper control 子元素部分
    width: 33%;
    margin: 0 auto;
    min-width: 450px;
    /* background-color: orange; */
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2px;
    box-sizing: border-box;
    user-select: none;

    > .control {
        display: flex;
        margin-bottom: 4px;
        > * {
            display: flex;
            align-items: center;
            cursor: pointer;
        }
        .play {
            margin: 0 8px;
        }
    }

    > .progress {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        font-size: ${props => props.theme.textSize.small};
        color: ${props => props.theme.textColor.secondary};

        .ct {
            margin-right: 8px;
        }

        .tt {
            margin-left: 8px;
        }

        .slider {
            flex: 1;
            // -- ant design comp style
            > .ant-slider {
                margin: 0;
            }

            .ant-slider-track {
                /* background-color: ${props => props.theme.textColor.primary}; */
                background-color: #C20C0C;
            }
            .ant-slider-step {
                z-index: -1;
                background-color: ${props => props.theme.textColor.secondary};
            }
            .ant-slider-handle {
                background-color: green;
                &::before {
                    width: 12px;
                    height: 12px;
                    /* background-color: ${props => props.theme.textColor.primary}; */
                }
                &::after {
                    box-shadow: 0 0 0 2px #C20C0C;
                }
                &:hover::after {
                    box-shadow: 0 0 0 2.5px #C20C0C;
                }
                &:focus::after {
                    box-shadow: 0 0 0 2.5px #C20C0C;
                }
                &.ant-tooltip-open::after {
                    content: "333";
                }
                &.ant-tooltip-open::before {
                    content: "333";
                }
            }
        }
    }
`

export const OtherWrapper = styled.div` // -- ↑ PlayerBarWrapper other-control 子元素部分
    user-select: none;
    flex: 1;
    max-width: 320px;
    min-width: 120px;
    /* background-color: yellow; */
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    padding-right: 6px;
    box-sizing: border-box;

    > *, > .playmode *, > .lyric * ,> .volume .icon *   {
        margin-left: 14px;
        cursor: pointer;
        fill: ${props => props.theme.textColor.secondary} !important;

        &:hover {
            fill: ${props => props.theme.textColor.primary} !important;
        }
    }

    > .playmode, > .lyric ,> .volume .icon {
        display: flex;
        align-items: center;
        margin:0;

        &:hover * {
            fill: ${props => props.theme.textColor.primary} !important;
        }
    }

    > .volume { // -- 声音控制布局
        position: relative;

        // -- ant design comp style
            > .ant-slider {
                height: 130px;
                position: absolute;
                position: absolute;
                top: -132px;
                left: 3px;
                margin: 0;
                margin: 0;
            }

            .ant-slider-handle.ant-tooltip-open::after {
                content: "" !important;
            }

            .ant-slider-track {
                /* background-color: ${props => props.theme.textColor.primary}; */
                background-color: #C20C0C;
            }
            .ant-slider-step {
                z-index: -1;
                background-color: ${props => props.theme.textColor.secondary};
            }
            .ant-slider-handle {
                background-color: green;
                &::before {
                    width: 12px;
                    height: 12px;
                    /* background-color: ${props => props.theme.textColor.primary}; */
                }
                &::after {
                    box-shadow: 0 0 0 2px #C20C0C;
                }
                &:hover::after {
                    box-shadow: 0 0 0 2.5px #C20C0C;
                }
                &:focus::after {
                    box-shadow: 0 0 0 2.5px #C20C0C;
                }
                &.ant-tooltip-open::after {
                    content: "333";
                }
                &.ant-tooltip-open::before {
                    content: "333";
                }
            }
    }
`

export const DetailWrapper = styled.div` // 播放详情页样式



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
