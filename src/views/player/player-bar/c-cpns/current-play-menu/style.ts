import styled from "styled-components";

export const PlayMenuWrapper = styled.div`
    width: 420px;
    height: 300px;
    background-color: ${props => props.theme.color.primary};
    /* background-color: red; */
    border-radius: 6px;
    overflow-y: auto;

    > .title {
        text-align: center;
        padding: 12px;
        font-size: ${props => props.theme.textSize.larger};
        font-weight: 700;
        color:${props => props.theme.textColor.primary};
        border-bottom: 1px solid ${props => props.theme.color.button_bg};
    }

    > .item {
        user-select: none;
        margin-top: 4px;
        height: 40px;
        border-radius: 4px;
        padding: 0 12px;
        box-sizing: border-box;
        display: flex;
        flex-flow:row nowrap;
        align-items: center;
        font-size:${props => props.theme.textSize.small};
        color:${props => props.theme.textColor.secondary};

        &:not(.active) {
            cursor: pointer;
        }

        &.active {
            background-color:${props => props.theme.color.hover_bg};
            color:${props => props.theme.textColor.primary};
        }

        &:hover {
            background-color:${props => props.theme.color.hover_bg};
        }

        > * {
            ${props => props.theme.mixin.singleLineClamp};
        }

        .name {
            width: 50%;
            margin-right: auto;
            font-size:${props => props.theme.textSize.normal};
            color:${props => props.theme.textColor.primary};
        }

        .arts {
            width: 30%;
            text-align: end;
            margin: 0 12px;
        }
    }

    /* 滚动条样式设置 */
    &::-webkit-scrollbar {
        width: 1px;
    }
    &::-webkit-scrollbar-track{
        background-color: ${props => props.theme.color.primary};
    }
    &::-webkit-scrollbar-thumb{
        width: 2px;
        background-color: ${props => props.theme.textColor.primary};
    }
`
