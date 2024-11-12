import styled from "styled-components";

export const SongListV1Wrapper = styled.div`
    > .song-list {
        .item {
            margin-top: 16px;
        }

        /* padding-bottom: 24px; */
        box-sizing: border-box;

        > .list-ctn {
            overflow: auto;


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

        > .loading {
            margin: 14px 0;
            text-align: center;
        }

        .not-more {
            text-align: center;
            margin-top: 16px;
            font-size: ${props => props.theme.textSize.v_small};
            color: ${props => props.theme.textColor.secondary};
        }
    }

    /* height: 60vh;

    > .list {
        height:100%;
        padding-bottom: 24px;
        overflow: auto;

        .item {
            margin-top: 16px;
        }
    } */
`
