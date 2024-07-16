import styled from "styled-components";

export const ItemWrapper = styled.div`
    width: 100%;
    height: 80px;
    margin-bottom: 14px;
    background-color: orange;
    border-radius: 6px;
    display: flex;
    flex-flow: nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    box-sizing: border-box;
    background-color: ${props => props.theme.color.hover_bg};
    color: ${props => props.theme.textColor.secondary};
    user-select: none;

    > .v-number {
        font-size: calc(${props => props.theme.textSize.larger} * 1.5);
        color: ${props => props.theme.textColor.primary};
        opacity: 0.8;
    }

    > .desc {
        padding: 0 12px;
        box-sizing: border-box;
    }

    > div {
        min-width: 80px;
        ${props => props.theme.mixin.singleLineClamp}
    }
`
