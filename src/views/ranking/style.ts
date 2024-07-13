import styled from "styled-components";

export const RankingWrapper = styled.div`
    display: flex;
    flex-flow:column nowrap;

    > .filter {
        user-select: none;
        width: 100%;
        height: 32px;
        /* background-color: orange; */
        display: flex;
        align-items: center;
        font-weight: 700;

        .title {
            color: ${props => props.theme.textColor.secondary};
            margin-right: 12px;
        }

        .item {
            cursor: pointer;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 14px;
            margin: 0 4px;
            border-radius: 4px;
            font-size: ${props => props.theme.textSize.small};

            &:hover {
                background-color: ${props => props.theme.color.hover_bg};
            }

            &.active {
                background-color:#C20C0C;
                color: white;
            }
        }
    }

    > .content {

    }
`
