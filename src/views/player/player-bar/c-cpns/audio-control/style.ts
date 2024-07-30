import styled from "styled-components";

export const ControlWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

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
                background-color: ${props => props.theme.textColor.primary};
                background-color: #C20C0C;
            }
            .ant-slider-step {
                z-index: -1;
                background-color: ${props => props.theme.color.button_bg};
                /* background-color: ${props => props.theme.textColor.secondary}; */
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
                    box-shadow: 0 0 0 2px #C20C0C;
                }
                &:focus::after {
                    box-shadow: 0 0 0 2px #C20C0C;
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

// --
    // new
    @media screen and (max-width: 520px) { // -- 手机
        > .control {
            transform: scale(1.3);
            margin-bottom: 6px;
        }
    }
`
