import styled from "styled-components";

export const SongsDetailWrapper = styled.div`
    margin: auto;
    width: 90%;
    /* background-color: red; */

    > .title {
            margin-top: 22px;
            font-weight: 700;
            font-size: ${props => props.theme.textSize.larger};
        }

    > .songs {
        overflow: auto;
        padding-right: 10px;
        box-sizing: border-box;

        /* 滚动条样式设置 */
        &::-webkit-scrollbar {
            width: 2px;
        }
        &::-webkit-scrollbar-track{
            background-color: ${props => props.theme.color.primary};


        }
        &::-webkit-scrollbar-thumb{
            width: 2px;
            border-radius: 2px;
            background-color: ${props => props.theme.textColor.primary};
            &:hover {
                cursor: pointer;
            }
        }

        .list {
            .item {
                margin-top: 16px;
            }

            .not-more {
                text-align: center;
                margin-top: 16px;
                font-size: ${props => props.theme.textSize.v_small};
                color: ${props => props.theme.textColor.secondary};
            }
        }
    }

    > .loading {
        margin: 14px 0;
        text-align: center;
    }

    > .not-more {
        text-align: center;
        margin-top: 16px;
        font-size: ${props => props.theme.textSize.v_small};
        color: ${props => props.theme.textColor.secondary};
    }

// -----
    // -- new
    @media screen and (max-width: 680px){ // -- 手机
        width: 100%;
        > .info {

            color: white;
            flex-flow:  column nowrap;
            position: relative;
            width: 100%;
            height: 280px;

            > div {
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }

            .album {
                width: 100%;
                height: 100%;
                img {
                    object-fit: cover;
                    object-position: left top;
                }

                position: relative;
                &::after {
                    position: absolute;
                    border-radius: 6px;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: calc(100%);
                    content: "";
                    background-color: rgba(0,0,0,0.2);
                }
            }

            .songs-info {
                padding: 8px;
                box-sizing: border-box;
                height: 100%;
                padding-top: 18px;
                margin-bottom: 6px;

                > div {
                    margin: 6px 0;
                }

                .description {
                    color: white;
                    opacity: 0.9;
                    text-indent: 1rem;
                }

                .player {
                    margin-top: auto;
                    margin-bottom: 0;
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: center;
                    justify-content: space-between;

                    ._ {
                        .count{
                            color: white;
                        }
                    }


                    .c-t {
                        color: white;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 520px){ // -- 手机
        > .info {
            height: 240px;
            padding-top: 12px;
        }
    }

    @media screen and (max-width: 350px){ // -- 手机
        > .info {
            height: 200px;
            padding-top: 8px;
        }
    }
`
