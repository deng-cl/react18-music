import styled from "styled-components";

export const VideoDetailWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* align-items: center; */
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
        width: 60%;
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
            border-radius: 6px;
            overflow: hidden;
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
        /* width: 400px; */
        /* flex: 1; */
        /* width: 40%; */
        /* background-color: purple; */
        transform: translateY(31px);
        height: 100%;
        padding-left: 12px;
        box-sizing: border-box;

        .title {
            font-size: ${props => props.theme.textSize.larger};
            font-weight: 700;
            padding-bottom: 8px;
            /* border-bottom: 1px solid ${props => props.theme.textColor.secondary}; */
        }

        .list {
            display: flex;
            flex-flow: column nowrap;
            color:${props => props.theme.textColor.secondary};
            font-size: ${props => props.theme.textSize.small};
            .item {
                cursor: pointer;
                height: 78px;
                margin-top: 14px;
                .album {
                    user-select: none;
                    position: relative;
                    border-radius: 6px;
                    overflow: hidden;
                    img {
                        width: 140px;
                        height: 100%;
                        border-radius: 6px;
                    }

                    .t {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        border-radius: 2px;
                        padding: 4px 6px;
                        background-color: #00000073;
                        color: white;
                    }
                }

                .info {
                    width: 260px;
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: space-between;
                    height: 100%;
                    padding: 2px;
                    margin-left: 6px;
                    box-sizing: border-box;

                    .name {
                        width: 245px;
                        font-size: ${props => props.theme.textSize.normal};
                        color:${props => props.theme.textColor.primary};
                        ${props => props.theme.mixin.twoLineClamp};
                    }

                    svg {
                        fill: ${props => props.theme.textColor.secondary};
                    }

                    .count {
                        span {
                            margin-left: 4px;
                        }
                    }
                }
            }
        }

    }


// --
    // new

    > .right .list .item .name-not-info {
        padding: 0 2px;
        margin-top: 4px;
        ${props => props.theme.mixin.twoLineClamp};
        display: none;
    }

    @media screen and (760px < width < 1000px){ // -- 电脑
        > .right {
            width: 200px;

            .list {
                .item {
                    flex-flow: column;
                    height: fit-content;
                    .album {
                        width: 100%;
                        height: fit-content;
                        img {
                            width: 100%;
                            height: fit-content;
                        }
                    }

                    .info {
                        display: none;
                    }

                    .name-not-info {
                        display: block;
                    }
                }
            }
        }
    }

    @media screen and (width <= 760px){
        > .right {
            display: none;
        }
    }
`
