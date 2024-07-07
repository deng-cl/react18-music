import styled from "styled-components";

export const VideoWrapper = styled.div`
    > .list {
        width: 100%;
        display: flex;
        flex-flow: row wrap;

        .item {
            width: calc(20% - 16px);
            margin-right: 16px;
            margin-bottom: 16px;
        }
    }
`
