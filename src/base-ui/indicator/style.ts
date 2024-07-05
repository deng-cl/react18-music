import styled from "styled-components";

export const IndicatorWrapper = styled.div`
    position: relative;
    overflow: hidden;

    .i-content {
        display: flex;
        transition: transform 200ms ease;

        > * {
            flex-shrink: 0;
        }
    }
`
