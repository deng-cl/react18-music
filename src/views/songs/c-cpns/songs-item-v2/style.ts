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
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px,220px));
        grid-template-rows: repeat(auto-fill, 1fr);
        gap: 12px;

        .item {
            width: 100% !important;
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
