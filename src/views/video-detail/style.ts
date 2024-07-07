import styled from "styled-components";

export const VideoDetailWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    /* height: 20px; */

    .flex-row {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    > div {
        flex-flow: column nowrap;
    }

    > .left {
        flex: 1;
        /* background-color: orange; */
        min-width: 420px;
        height: 100%;

        .base-info {
            flex-flow: column nowrap;
            align-items: start;
            .title {
                font-size: ${props => props.theme.textSize.larger};
                font-weight: 700;
                margin-bottom: 14px;
            }

            .other {
                width: 100%;
                color: ${props => props.theme.textColor.secondary};
                font-size: ${props => props.theme.textSize.normal};

                .count,.comment-count,.share,.favo,.ct {
                    margin-right: 16px;
                    svg {
                        fill: ${props => props.theme.textColor.secondary};
                    }
                    span {
                        margin-left: 4px;
                    }
                }

                .ct {
                    margin-left: auto;
                }
            }
        }

        .v-main {
            margin-top: 24px;
            video {
                width: 100%;
            }
        }

        .comment-list {
            .top {
                margin: 24px 0;
                .title {
                    font-size: ${props => props.theme.textSize.larger};
                    margin-right: 8px;
                    font-weight: 700;
                }
                .count {
                    color: ${props => props.theme.textColor.secondary};
                    font-size: ${props => props.theme.textSize.small};
                }

                .sort {
                    margin-left: auto;
                    font-size: ${props => props.theme.textSize.small};
                    color: ${props => props.theme.textColor.secondary};
                    user-select: none;
                    .btn {
                        margin:0 12px;
                        &:not(.active){
                            cursor: pointer;
                        }
                        &:hover:not(.active){
                            text-decoration: underline;
                        }
                        &.active {
                            color: ${props => props.theme.textColor.primary};
                        }
                    }
                }
            }

            .list {
                padding-left: 14px;
                box-sizing: border-box;
                .item {
                    margin-bottom: 16px;
                    width: 100%;
                    font-size: ${props => props.theme.textSize.small};
                    .user{
                        color: ${props => props.theme.textColor.secondary};
                        font-weight: 500;
                        /* align-items: start; */

                        .name {
                            flex-shrink: 0;
                        }

                        img {
                            width: 30px;
                            height: 30px;
                            border-radius: 30px;
                            margin-right: 8px;

                        }
                    }

                    .content {
                            margin-left: 38px;
                            color: ${props => props.theme.textColor.primary};
                        .t {
                            flex-shrink: 0;
                            padding: 0 8px;
                            box-sizing: border-box;
                            margin-left: auto;
                            color: ${props => props.theme.textColor.secondary};
                        }
                    }

                    .info {
                        padding-left: 38px;
                        box-sizing: border-box;
                        .content {
                            color: ${props => props.theme.textColor.primary};
                        }
                    }

                }
            }
        }
    }

    > .right {
        flex-shrink: 0;
        width: 350px;
        background-color: purple;
        height: 100%;
    }
`
