import IconArrowLeft from "@/assets/icon/header/icon-arrow-left"
import IconArrowRight from "@/assets/icon/header/icon-arrow-right"
import IconSharealt from "@/assets/icon/header/icon-sharealt"
import IconStar from "@/assets/icon/header/icon-star"
import IconHome from "@/assets/icon/nav/icon-home"
import IconMusic from "@/assets/icon/nav/icon-music"
import IconMV from "@/assets/icon/nav/icon-mv"
import IconSetting from "@/assets/icon/nav/icon-setting"
import IconTheme from "@/assets/icon/nav/icon-theme"
import IconNextPlayer from "@/assets/icon/player/icon-next-player"
import IconPause from "@/assets/icon/player/icon-pause"
import IconPlayerOrder from "@/assets/icon/player/icon-player-order"
import IconPlayerRandom from "@/assets/icon/player/icon-player-random"
import IconPlayerRepetetion from "@/assets/icon/player/icon-player-repetetion"
import IconPlayerV1 from "@/assets/icon/player/icon-player-v1"
import IconPlayerV2 from "@/assets/icon/player/icon-player-v2"
import IconSound from "@/assets/icon/player/icon-sound"
import IconSoundMute from "@/assets/icon/player/icon-sound-mute"
import IconStepbackward from "@/assets/icon/player/icon-stepbackward"
import IconStepforward from "@/assets/icon/player/icon-stepforward"

import logoDark from "@/assets/icon/logo/logo-dark.png"
import logoLight from "@/assets/icon/logo/logo-light.png"

import { memo } from "react"
import type { ReactNode, FC } from "react"

interface IProps {
    children?: ReactNode
}

const ShowIconTest: FC<IProps> = () => {
    return (
        <div className="show-icon" style={{ margin: "20px 0" }}>
            <hr />
            <div className="icons">
                <div className="header">
                    <IconArrowLeft />
                    <IconArrowRight />
                    <IconSharealt />
                    <IconStar />
                </div>
                <div className="nav">
                    <IconHome />
                    <IconMusic />
                    <IconMV />
                    <IconSetting />
                    <IconTheme />
                </div>
                <div className="player">
                    <IconNextPlayer />
                    <IconPause />
                    <IconPlayerOrder />
                    <IconPlayerRandom />
                    <IconPlayerRepetetion />
                    <IconPlayerV1 />
                    <IconPlayerV2 />
                    <IconSound />
                    <IconSoundMute />
                    <IconStepbackward />
                    <IconStepforward />
                </div>
                <div className="logo" style={{ background: "orange", display: "flex" }}>
                    <img src={logoDark} alt="" style={{ width: "200px", marginRight: "20px" }} />
                    <img src={logoLight} alt="" style={{ width: "200px", marginRight: "20px" }} />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default memo(ShowIconTest)
