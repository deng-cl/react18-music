import styled from "styled-components";

export const OperatorWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    padding-right: 6px;
    box-sizing: border-box;

    > *, > .playmode *, > .lyric * ,> .volume .icon * > .menu *   {
        margin-left: 14px;
        cursor: pointer;
        fill: ${props => props.theme.textColor.secondary} !important;

        &:hover {
            fill: ${props => props.theme.textColor.primary} !important;
        }
    }

    > .playmode, > .lyric ,> .volume .icon, > .menu .icon  {
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
                top: -138px;
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
