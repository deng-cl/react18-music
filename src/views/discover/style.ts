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

        > .pagination {
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            /* transition: all 0ms ease !important; */
            .ant-pagination-item {
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
            .ant-pagination-item-ellipsis {
                color: ${props => props.theme.textColor.primary};
            }

            .anticon svg {
                fill: ${props => props.theme.textColor.primary};
            }
        }
    }
`
