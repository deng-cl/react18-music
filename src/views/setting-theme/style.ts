import styled from "styled-components";

export const ThemeWrapper = styled.div`
    .theme {
        background-color: ${props => props.theme.color.hover_bg};
        font-size: ${props => props.theme.textSize.larger};
        font-weight: 700;
        padding: 0 24px;
        box-sizing: border-box;
        width: 100%;
        height: 80px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: space-between;


        .switch {
            user-select: none;
            cursor: pointer;
            width: 60px;
            height: 32px;
            border-radius: 32px;
            /* background-color: #000; */
            background-color:${props => props.theme.color.button_bg};

            .dot {
                transition: all 200ms ease;
                /* transform: translateX(28px); */

                .icon {
                    width: 32px;
                    height: 32px;
                }
                // -- dot-transition
            }
        }
    }
`
