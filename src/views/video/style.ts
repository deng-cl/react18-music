import styled from "styled-components";

export const VideoWrapper = styled.div`
    > .list {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;

        .item {
            width: calc(20% - 12px);
            /* margin-right: 16px; */
            margin-bottom: 18px;
        }
    }

// -----
    // -- new
    @media screen and (min-width:1880px){ // -- 电脑
        > .list {
            .item {
                width: calc(16.666666666667% - 12px);
            }
        }
    }

    @media screen and (max-width:1880px ){ // -- 电脑
        > .list {
            .item {
                width: calc(20% - 12px);
            }
        }
    }


    @media screen and (max-width: 1600px ){ // -- 电脑
        > .list {
            .item {
                width: calc(25% - 12px);
            }
        }
    }

    @media screen and (max-width:1380px ){ // -- 电脑
        > .list {
            .item {
                width: calc(33.3333336% - 12px);
            }
        }
    }

    @media screen and (max-width: 780px){ // -- 手机
        > .list {
            .item {
                width: calc(50% - 6px);
            }
        }
    }

    @media screen and (max-width:350px){ // -- 手机
        > .list {
            .item {
                width: calc(100% - 12px);
            }
        }
    }
`
