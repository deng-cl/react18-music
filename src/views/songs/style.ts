import styled from "styled-components";

export const SongsWrapper = styled.div`
    > .filter {
        margin: 16px 0;
        /* background-color: red; */
        margin-bottom: 28px;
        display: flex;
        align-items: center;
        user-select: none;

        .title {
            font-size: ${props => props.theme.textSize.larger};
            font-weight: 700;
            margin-right: 8px;
        }

        .item {
            font-size: ${props => props.theme.textSize.small};
            cursor: pointer;
            padding: 4px 8px;
            margin-right: 8px;
            border-radius: 4px;

            &.active {
                background-color: #C20C0C;
                color: white;
            }
        }

        .__ {
            font-size: ${props => props.theme.textSize.v_small};
            color: ${props => props.theme.textColor.secondary};
        }
    }


`
