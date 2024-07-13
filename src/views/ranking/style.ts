import styled from "styled-components";

export const RankingWrapper = styled.div`
    display: flex;
    flex-flow:column nowrap;

    .filter {
        width: 100%;
        height: 25px;
        background-color: orange;
        display: flex;
        align-items: center;
        font-weight: 700;

        .item {
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 14px;
            margin: 0 4px;
            background-color: green;
        }
    }
`
