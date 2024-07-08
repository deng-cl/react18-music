import styled from "styled-components";

export const PlayerBarWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 58px;
    padding: 6px 8px;
    box-sizing: border-box;
    background-color: ${props => props.theme.color.primary};
    border-top: 1px solid ${props => props.theme.textColor.secondary};
    /* ↓ 对子元素的布局 */
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    > div {
        height: 100%;
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
    justify-content: space-between;


    > .album {
        width: 45px;
        height: 45px;
        margin-right: 8px;
        img {
            height: 100%;
            border-radius: 6px;
        }
    }

    > .msg {
        width: calc(100% - 53px);
        padding-right: 4px;
        box-sizing: border-box;
        display: flex;
        flex-flow: column nowrap;

        > div {

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
        align-items: start;
        font-size: ${props => props.theme.textSize.small};
        color: ${props => props.theme.textColor.secondary};

        .ct {
            margin-right: 6px;
        }

        .tt {
            margin-left: 6px;
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
            }
        }
    }
`

export const OtherWrapper = styled.div` // -- ↑ PlayerBarWrapper other-control 子元素部分
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

    > * {
        margin-left: 14px;
        cursor: pointer;
        fill: ${props => props.theme.textColor.secondary} !important;

        &:hover {
            fill: ${props => props.theme.textColor.primary} !important;
        }
    }
`
