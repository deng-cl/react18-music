import styled from "styled-components";

export const DiscoverWrapper = styled.div`
    padding-bottom: 24px;
    > .rec-songs {
        position: relative;
        width: 100%;
        height: 130px;
        margin-top: 10px;
        display: flex;
        overflow-x: auto;
        /* background: green; */

        .item {
            margin-right: 10px;
            cursor: pointer;
        }

        svg {
            fill: white;
        }
    }

    > .song-list {
        .item {
            margin-top: 16px;
        }

        > .title {
            margin-top: 22px;
            margin-bottom: 18px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
                font-weight: 700;
                display: flex;
                align-items: center;
                .count {
                    margin-left: 8px;
                    transform: translateY(2px);
                    font-weight: normal;
                    font-size: ${props => props.theme.textSize.small};
                    color: ${props => props.theme.textColor.secondary};
                }
            }

            .play-entire {
                display: flex;
                align-items: center;
                font-size: ${props => props.theme.textSize.small};
                padding: 8px 12px;
                border-radius: 6px;
                background-color: #C20C0C;
                color: white;
                color: white;
                cursor: pointer;
            }
        }
    }

    /* > .loading {
        margin: 14px 0;
        text-align: center;
    } */

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
`
