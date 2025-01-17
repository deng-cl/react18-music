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
        transition: all 200ms ease;
    }

    > .album {
        flex: 1;
        /* background-color: green; */
        justify-content: center;

        .cover {
            margin-bottom: 1px;
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
                line-height: 18px;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 8px 0;
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
        z-index: 2;


        svg {
            fill: ${props => props.theme.textColor.secondary};

            &:hover {
                fill: ${props => props.theme.textColor.primary};
            }
        }
    }



// --
    // new
    > .switch {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 16px;
        height: 60px;
        z-index: 1;
        line-height: 40px;
        background-color: ${props => props.theme.color.primary};
        color:${props => props.theme.textColor.secondary};
        display: none;

        .active {
            color:${props => props.theme.textColor.primary};
            font-size: calc(${props => props.theme.textSize.normal} + 2px);
        }

        div {
            user-select: none;
            cursor: pointer;
            margin: 0 6px;
            padding: 0px 12px;
            box-sizing: border-box;
            height: fit-content ;
            transition: all 200ms ease;
        }
    }

    > .album {
        > .info {
            .name {
                font-size: ${props => props.theme.textSize.larger};
                margin: 8px;
            }
            .arts {
                font-size: ${props => props.theme.textSize.small};
                color: ${props => props.theme.textColor.secondary};
                text-align: center;
            }
            margin-bottom: 16px;
        }
    }


    @media screen and (max-width:880px){ // -- 电脑
        display: block;

        > .switch {
            display: flex;
        }

        >.left {
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }

        > .right {
            width: 100%;
            position: absolute;
            left: 100%;
            top: 8vh;
        }

        > .album {
            .cover {
                img {
                    width: 40vw;
                }
            }

            > .control {
                position: fixed;
                bottom: 24px;
                width: 60vw;
            }

            > .info {
                display: block;
            }
        }

        > .lyric {
            height: 75vh;
            min-width: 100px;
        }
    }
`

