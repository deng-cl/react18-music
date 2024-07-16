import styled from "styled-components";

export const ItemWrapper = styled.div`
    flex-shrink: 0;
    /* background-color: red; */
    display: flex;
    flex-flow: column nowrap;
    cursor: pointer;
    transition: all 250ms ease;
    &:hover {
        transform: translateY(-3px);
    }

    .album {
        position: relative;
        color: white;
        fill: white;
        font-size: ${props => props.theme.textSize.small};
        /* max-height: 123px; */
        height: 0;
        padding: 60px 0;
        overflow: hidden;
        border-radius: 6px;
        img {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
        }
        .al-info {
            position: absolute;
            bottom: 4px;
            width: 100%;
            padding: 4px ;
            box-sizing: border-box;
            /* background-color: green; */
            display: flex;
            justify-content: space-between;

            .count {
                display: flex;
                align-items: center;
                .icon {
                    fill: white;
                }
                > span {
                    margin-left: 4px;
                }
            }

        }
    }

    .info {
        display: flex;
        flex-flow: column nowrap;
        margin-top: 4px;
        padding: 0 4px;
        box-sizing: border-box;

        .arts {
            margin-top: 6px;
            color:${props => props.theme.textColor.secondary};
            font-size: ${props => props.theme.textSize.small};
        }
    }
`
