import styled from "styled-components";

export const IndicatorWrapper = styled.div`
    /* position: absolute;
    inset: 0; */
    /* margin: auto;
    top: auto; */
    /* bottom: 4px; */
    /* background-color: red; */
    /* height: 20px;
    width: 200px; */
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;

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
`
