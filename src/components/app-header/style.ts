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
            height: 32px;
            margin-right: 24px;
        }

        .info {
            height: 32px;

        }
    }
`
