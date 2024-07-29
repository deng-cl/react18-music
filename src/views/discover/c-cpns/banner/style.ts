import styled from "styled-components";

export const BannerWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 285px;
    /* background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);    display: flex; */
    justify-content: center;
    border-radius: 6px;
    background: orange;

    > .banners {
        position: absolute;
        inset: 0;
        margin: auto;
        width: 769px;
        height: 100%;
        display: flex;
        border-radius: 6px;

        .item {
            width: 100%;
            transition: all 600ms ease;
            img {
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
    }

    > .control {
        position: absolute;
        inset: 0;
        margin: auto;
        width: 100%;
        height: 40px;
        /* background-color: red; */
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        box-sizing: border-box;
        align-items: center;
        fill: white;
        .left, .right {
            cursor: pointer;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            user-select: none;

            &:hover {
                background-color: #0000002e;
            }
        }
    }

    > .commom-indicator {
        position: absolute;
        inset: 0;
        margin: auto;
        top: auto;
        bottom: 4px;
        width: 200px;
        height: 20px;
    }
    svg {
        fill: white;
    }

// -----
    // -- new
    @media screen and (max-width: 854px) { // --平板或手机
        height: 250px;
        > .banners {
            width: 100%;
            .item {
                width: auto;
                img {
                    border-radius: 6px;
                    height: fit-content;
                    height: 100%;
                    width: auto;
                    width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }
        }
    }

    @media screen and (max-width: 580px) { // -- 手机
        height: 210px;
    }
    @media screen and (max-width: 420px) { // -- 手机
        height: 180px;
    }
    @media screen and (max-width: 340px) { // -- 手机
        height: 160px;
    }
`
