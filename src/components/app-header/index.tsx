import { memo } from "react"
import type { ReactNode, FC } from "react"
import { HeaderWrapper } from "./style"
import IconArrowLeft from "@/assets/icon/header/icon-arrow-left"
import IconAvatar from "@/assets/icon/header/icon-avatar"
import IconSharealt from "@/assets/icon/header/icon-sharealt"

interface IProps {
    children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
    return (
        <HeaderWrapper>
            <div className="left">
                <div className="back">
                    <IconArrowLeft />
                </div>

                <div className="btn">
                    <span>Repository</span>
                    <IconSharealt />
                </div>
                <div className="btn">
                    <span>About me</span>
                    <IconSharealt />
                </div>
            </div>

            <div className="right">
                <div className="search">
                    <input type="text" />
                </div>
                <div className="info">
                    <IconAvatar />
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default memo(AppHeader)
