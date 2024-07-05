import styled from "styled-components";

export const BannerWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 285px;
    /* background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);    display: flex; */
    justify-content: center;
    border-radius: 6px;

    > .banners {
        position: absolute;
        inset: 0;
        margin: auto;
        width: 769px;
        height: 100%;
        display: flex;

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

    > .indicator {
        position: absolute;
        inset: 0;
        margin: auto;
        top: auto;
        bottom: 4px;
        /* background-color: red; */
        height: 20px;
        width: 200px;
        display: flex;
        align-items: center;

            .item {
                width:40px ;
                display: flex;
                justify-content: center;
                align-items: center;
                .dot {
                    width: 4px;
                    height:4px;
                    border-radius: 10px;
                    background-color: white;

                    &.active {
                        width: 10px;
                        height: 10px;
                    }

                    &.middle {
                        width: 6px;
                        height: 6px;
                    }
                }
            }
    }
`
