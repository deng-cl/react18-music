import styled from "styled-components";

export const SectionWrapper = styled.div`
    margin-bottom: 24px;
    user-select: none;

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

    > .route {
        cursor: pointer;
    }

    > .title {
        padding-left: 0px;
    }
`
