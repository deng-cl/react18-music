import styled from "styled-components";

export const PlayerWrapper = styled.div`
    position: fixed;
    z-index: 999;
    inset: 0;
    margin:auto;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.color.primary};
    display: flex;
    flex-flow: row nowrap;

    > .left, >.right, .lyric-content {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    > .album {
        flex: 1;
        /* background-color: green; */
        justify-content: center;

        .cover {
            margin-bottom: 12px;
            img {
                width: 18vw;
                max-width: 390px;
                min-width: 220px;
                border-radius: 6px;
            }
        }

        .control {
            justify-content: center;
            width: 24vw;
            max-width: 420px;
            min-width: 260px;
        }
    }

    > .lyric {
        width: 40%;
        min-width: 580px;
        /* background-color: red; */
        flex-shrink: 0;
        padding: 0 20px;
        height: 68vh;
        margin: auto 0;
        box-sizing: border-box;
        overflow: hidden;
        overflow-y: auto;

        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            width: 0px;
        }

        .lyric-content {
            transition: all 200ms ease;
            justify-content: flex-start;
            /* transform: translateY(calc(35% - 34px)); // -- 18 + 4 * 2  --> 24px ↓ .line */
            transform: translateY(30%);
            .line {
                transition: all 200ms ease;
                height: 18px;
                line-height: 18px;
                margin: 4px 0;
                color: ${props => props.theme.textColor.secondary};
                font-size: ${props => props.theme.textSize.small};

                &.active {
                    transition: all 200ms ease;
                    color: ${props => props.theme.textColor.primary};
                    font-size: ${props => props.theme.textSize.normal}
                }
            }
        }
    }

    > .hide-detail {
        position: fixed;
        top: 20px;
        right: 20px;
        cursor: pointer;

        svg {
            fill: ${props => props.theme.textColor.secondary};

            &:hover {
                fill: ${props => props.theme.textColor.primary};
            }
        }
    }
`

