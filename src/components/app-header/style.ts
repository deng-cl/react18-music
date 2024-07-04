import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 40px;

    > .left, > .right {
        display: flex;
        flex-flow: row nowrap;

        div:not(.info) {
            background-color: ${props => props.theme.color.button_bg};
            border-radius: 6px;
        }

        div{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    > .left {
        .back {
            margin-right: 160px;
            height: 32px;
            width: 32px;
        }

        .btn {
            padding: 2px 8px;
            margin: 0 6px;
            span {
                margin: 0 4px;
            }
        }

        div {
            cursor: pointer;
        }
    }

    > .right {

        .search {
            position: relative;
            width: 240px;
            height: 32px;
            margin-right: 18px;
            padding-left: 10px;
            box-sizing: border-box;

            input {
                height: 100%;
                width: 100%;
                border-radius: 6px;
                border: none;
                outline: none;
                background-color: rgba(0,0,0,0);
                color: ${props => props.theme.textColor.primary};

                &:focus {
                    /* color: ${props => props.theme.color.primary}; */
                    color: white;
                }

                &::placeholder {
                    color: #ffffff66;
                }
            }

            > .icon {
                fill: #ffffff66;
                margin-right: 6px;
            }

            .clear {
                margin-right: 4px;
                cursor: pointer;
            }
        }

        .info {
            height: 32px;
        }
    }
`
