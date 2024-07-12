import styled from "styled-components";

export const ItemWrapper = styled.div`
    user-select: none;
    flex-shrink: 0;
    position: relative;
    border-radius: 6px;
    /* background-color: red; */
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    color: white;

    > .albun {
        img {
            width: 100%;
            height: 100%;
        }
    }

    > .name {
        position: absolute;
        bottom: 0;
        padding: 2px 6px;
        box-sizing: border-box;
        width: 100%;
        /* height: 20px; */
        background-color: #5e5e5e5c;
        font-size: ${props => props.theme.textSize.small};

        ${props => props.theme.mixin.twoLineClamp}
    }
`
