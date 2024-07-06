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
                    padding: 4px 6px;
                    background-color: #C20C0C;
                    margin-right: 4px;
                    border-radius: 6px;
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
`
