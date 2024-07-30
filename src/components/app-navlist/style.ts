import styled from "styled-components"

export const NavListWrapper = styled.div`
    padding-top: 2px;
    padding-right: 2px;
    box-sizing: border-box;
    height: fit-content;
    user-select: none;

    > .logo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        margin-bottom: 12px;

        img {
            width: 140px;
        }

        .show-nav {
            display: none;
            cursor: pointer;
        }
    }

// -----
    @media screen and (min-width: 1080px){ // -- 电脑
        > .nav-list {
            transform: translateX(0) !important;
            transition: all 400ms ease;
        }
    }

    @media screen and (width <= 1080px) { // --平板或手机
        > .nav-list {
            padding: 0 18px;
            box-sizing: border-box;
            width: 100%;
            position: fixed;
            height: fit-content;
            left: 0;
            top: 50px;
            z-index: 999;
            background-color: ${props => props.theme.color.primary};
            transition: all 400ms ease;
        }

        > .logo {
            display: flex;
            align-items: center;
            .show-nav {
                display: block;
                margin-left: 8px;
                font-size: 26px;
                width: 30px;
                height: 30px;
                transition: all 400ms ease;
            }
        }
    }

// -----
    // -- new
    @media screen and (368px < width <= 520px){ // -- 手机
        padding-left: 0;
        padding-right: 4px;

        > .nav-list {
            z-index: 998;
        }
    }

    @media screen and (width < 368px){ // -- 手机
        padding-right: 0;
    }
`

