import styled from "styled-components";

export const ViewWrapper = styled.div`
    position: relative;
    /* padding: 8px 0; */
    width: 100%;
    z-index: 1;

    .scroll{
        width: 100%;
        position: absolute;
        overflow: hidden;
        .sroll-content {
            display: flex;
            transition: transform 250ms ease;
        }
    }

    > .left, >.right {
        user-select: none;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 9;
        width: 30px;
        height: 30px;
        border-radius: 6px;
        /* background-color: ${props => props.theme.color.primary}; */
        background-color: rgba(0,0,0,0);
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: #0000002e;
        }
    }

    > .left {
        left: 0;
    }

    > .right {
        right: 0;
        /* transform: translateX(-50%); */
    }
`
