import styled from "styled-components";

export const VideoWrapper = styled.div`
    > .list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px,220px));
        grid-template-rows: repeat(auto-fill, 1fr);
        gap: 12px;

        .item {

            width: 100% !important;
            /* margin-bottom: 18px; */
        }
    }
// -----
    @media screen and (min-width:1880px){ // -- 电脑
        > .list {
            grid-template-columns: repeat(8, 1fr);
        }
    }

    @media screen and (max-width:1880px ){ // -- 电脑
        > .list {
            grid-template-columns: repeat(6, 1fr);
        }
    }

    @media screen and (max-width:1480px ){ // -- 电脑
        > .list {
            grid-template-columns: repeat(5, 1fr);
        }
    }


    @media screen and (max-width:1200px ){ // -- 电脑
        > .list {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media screen and (max-width: 780px){ // -- 手机

        > .list {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width:350px){ // -- 手机
        > .list {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`
