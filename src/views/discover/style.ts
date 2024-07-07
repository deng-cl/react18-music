import styled from "styled-components";

export const DiscoverWrapper = styled.div`
    > .rec-songs {
        position: relative;
        width: 100%;
        height: 130px;
        margin-top: 10px;
        display: flex;
        /* background: green; */

        .item {
            margin-right: 10px;
            cursor: pointer;
        }
    }

    > .song-list {
        .item {
            margin-top: 16px;
        }
    }
`
