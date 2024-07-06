import styled from "styled-components";

export const ItemWrapper = styled.div`
    user-select: none;
    flex-shrink: 0;
    position: relative;
    border-radius: 6px;
    background-color: red;
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;

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

        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`
