import styled from "styled-components";

export const PaganationWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* transition: all 0ms ease !important; */
    .ant-pagination-item {
        border: none;

        a {
            color: ${props => props.theme.textColor.primary};
            transition: color 0s;
        }

        &:not(.ant-pagination-item-active):hover {
            background-color: ${props => props.theme.color.active};
        }

        &.ant-pagination-item-active {
            background-color: ${props => props.theme.textColor.primary};
            a {
                color: ${props => props.theme.color.primary};
            }
        }
    }
    .anticon-double-right,.ant-pagination-item-ellipsis {
        color: ${props => props.theme.textColor.primary} !important;
    }

    .anticon svg {
        fill: ${props => props.theme.textColor.primary};
    }
`

