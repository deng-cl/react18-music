import styled from "styled-components";

export const SongsDetailWrapper = styled.div`
    margin: auto;
    width: 90%;
    /* background-color: red; */

    > .info {
        height: 180px;
        /* background-color: green; */
        display: flex;
        flex-flow: row nowrap;
        font-size: ${props => props.theme.textSize.small};
        /* overflow: hidden; */

        .album {
            flex-shrink: 0;
            width: 180px;
            height: 100%;
            overflow: hidden;
            margin-right: 8px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 6px;
            }
        }

        .songs-info {
            flex: 1;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;

            > .name {
                font-size:${props => props.theme.textSize.larger};
                font-weight: 700;
            }

            .author {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;

                img {
                    width: 30px;
                    height: 30px;
                    border-radius: 30px;
                    margin-right: 6px;
                }
            }

            .tags {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;

                .tag {
                    padding: 6px 8px;
                    background-color: #C20C0C;
                    margin-right: 6px;
                    border-radius: 8px;
                    color: white;
                }
            }

            .description {
                color: ${props => props.theme.textColor.secondary};

                ${props => props.theme.mixin.twoLineClamp};
                -webkit-line-clamp: 3;
                line-clamp: 3;
            }

            .player {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: space-between;

                ._ {
                    display: flex;
                    align-items: center;
                    .btn {
                        position: relative;
                        padding: 8px 12px;
                        border-radius: 6px;
                        background-color: #C20C0C;
                        cursor: pointer;
                        margin-right: 6px;
                        color: white;
                    }
                    .count{
                        color: ${props => props.theme.textColor.secondary};
                    }
                }


                .c-t {
                    color: ${props => props.theme.textColor.secondary};
                }
            }
        }
    }

    > .songs {
        .title {
            margin-top: 22px;
            font-weight: 700;
            font-size: ${props => props.theme.textSize.larger};
        }

        .list {
            .item {
                margin-top: 16px;
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
