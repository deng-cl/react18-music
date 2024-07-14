import styled from "styled-components";

export const ItemWrapper = styled.div<{ $height: number }>`
    user-select: none;
    width: 100%;
    height: ${props => props.$height + "px"};
    display: flex;
    flex-flow: row nowrap;
    font-size: ${props => props.theme.textSize.small};
    cursor: pointer;
    border-radius: 6px;

    &:hover {
        background-color: ${props => props.theme.color.hover_bg};
    }

    > div { // -- commom style
        width: 35%;
        height: 100%;
        flex-shrink: 0;
        flex-grow: 0;
        padding: 4px;
        padding-left: 0;
        box-sizing: border-box;
        display: flex;
        align-items: center;

        > div{
            width: 100%;
        }
    }

    > .left {
        /* background-color: pink; */
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        .picture {
            width: fit-content;
            img {
                border-radius: 6px;
                width: ${props => props.$height + "px"};
                height: ${props => props.$height + "px"};
            }
        }

        .info {
            margin-left: 6px;
            .name {
                width: calc(100% - 40px);
                color:${props => props.theme.textColor.primary};

            }
            .ars {
                width: calc(100% - 40px);
                margin-top: 6px;
                font-size: ${props => props.theme.textSize.v_small};
                color:${props => props.theme.textColor.secondary};
            }
        }
    }

    .single-line {
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
    }

    > .center {
        flex: 1;
        /* background-color: green; */
        display:  flex;
        align-items: center;
    }

    > .right {
        /* background-color: orange; */
        justify-content: space-between;
        padding-right: 16px;
        box-sizing: border-box;

        > div {
            display:  flex;
            align-items: center;
        }

        .icons {
            width: fit-content;
            cursor: pointer;
        }
    }
`
