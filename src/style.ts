import styled from "styled-components";

export const AppWrapper = styled.div`
    position: fixed;
    inset: 0;
    margin: auto;
    display: flex;
    flex-flow: row nowrap;
    color: ${props => props.theme.textColor.primary};
    background-color: ${props => props.theme.color.primary};
    padding:  6px 14px;
    box-sizing: border-box;
    font-size: ${props => props.theme.textSize.normal};

    svg {
        fill: ${props => props.theme.textColor.primary};
    }

    .main-left {
        width: 200px;
        height: 100vh;
    }

    .main-right {
        flex: 1;
        /* background-color: orange; */
    }
`
