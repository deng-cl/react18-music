import styled from "styled-components";

export const ItemWrapper = styled.div`
    margin-top: 12px;
    margin-bottom: 36px;
    > .title {
        font-size: ${props => props.theme.textSize.larger};
        font-weight: 700;
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;
        padding-right: 16px;
        box-sizing: border-box;

        .more {
            user-select: none;
            cursor: pointer;
            font-size: ${props => props.theme.textSize.normal};
            font-weight: 400;
            color:${props => props.theme.textColor.secondary};

            &:hover {
                text-decoration: underline;
            }
        }
    }

    > .list {
        display: flex;
        flex-flow: row wrap;
        .item {
            margin-bottom: 16px;
            margin-right: 16px;
            width: calc(20% - 16px);
            cursor: pointer;

            .album {
                position: relative;
                border-radius: 6px;
                overflow: hidden;
                img {
                    width: 100%;
                }
                .count {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    padding: 5px 7px;
                    background-color: #00000073;
                    border-radius: 4px;
                    font-size: ${props => props.theme.textSize.small};
                    color: white;
                }
            }

            .name {
                width: 100%;
                padding: 0 4px;
                box-sizing: border-box;
                margin-top: 6px;
                line-height: 22px;
                ${props => props.theme.mixin.twoLineClamp}
            }
        }
    }


// -----
    // -- new
    @media screen and (width > 1680px ) { // --电脑
        > .list {
            .item {
                width: calc(12.5% - 16px);
            }
        }
    }

    @media screen and (1480px < width < 1680px) { // --电脑
        > .list {
            .item {
                width: calc(14.2851% - 16px);
            }
        }
    }

    @media screen and (1280px < width < 1480px) { // --电脑
        > .list {
            .item {
                width: calc(16.6666666667% - 16px);
            }
        }
    }

    @media screen and (900px < width < 1280px) { // --电脑
        > .list {
            .item {
                width: calc(20% - 16px);
            }
        }
    }

    @media screen and (750px < width < 900px) { // --电脑或平板
        > .list {
            .item {
                width: calc(25% - 16px);
            }
        }
    }

    @media screen and (width < 750px) { // --平板或手机
        > .list {
            .item {
                width: calc(33.333336% - 16px);
            }
        }
    }

`
