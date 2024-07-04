import styled from "styled-components";

export const SectionWrapper = styled.div`
    margin-bottom: 24px;
    user-select: none;

   > .section {
        > .icon {
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            padding: 12px 0;
            padding-left: 14px;
            margin: 2px 0;

            .name {
                margin-left: 6px;
            }
        }

        > .active {
            background-color: ${props => props.theme.color.active};
        }

        > .route {
            cursor: pointer;

            &:hover {
                /* background-color: ${props => props.theme.color.hover_bg}; */
            }
        }

        > .title {
            padding-left: 0px;
        }
   }
`
