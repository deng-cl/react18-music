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
        img {
            width: 100%;
            border-radius: 6px;
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
                > span {
                    margin-left: 4px;
                }
            }

        }
    }

    .info {
        display: flex;
        margin-top: 4px;
        padding: 0 4px;
        box-sizing: border-box;

        .arts {
            margin-left: 4px;
        }
    }
`
