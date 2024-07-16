import styled from "styled-components";

export const BaseWrapper = styled.div`
    > .item {
        width: 100%;
        background-color: ${props => props.theme.color.hover_bg};
        border-radius: 6px;
        padding: 0 14px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    > .clear-cache {
        user-select: none;
        height: 60px;

        .name {
            opacity: .8;
        }

        .button {
            cursor: pointer;
            padding: 8px;
            background-color: ${props => props.theme.color.button_bg};
            font-size: ${props => props.theme.textSize.small};
            background-color: #C20C0C;
            color: white;
            border-radius: 4px;

            &:hover {
                opacity: .8;
            }
        }
    }
`
