import styled from "styled-components";

export const SongListV1Wrapper = styled.div`
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
`
