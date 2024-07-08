import { memo } from "react"
import type { ReactNode, FC } from "react"
import { Slider } from 'antd';

import { ControlWrapper, InfoWrapper, OtherWrapper, PlayerBarWrapper } from "./style"
import IconMusicList from "@/assets/icon/player/icon-music-list"
import IconSound from "@/assets/icon/player/icon-sound"
import IconStepbackward from "@/assets/icon/player/icon-stepbackward"
import IconStepforward from "@/assets/icon/player/icon-stepforward"
import IconPlayerV1 from "@/assets/icon/player/icon-player-v1"

interface IProps {
    children?: ReactNode
}

const PlayerBar: FC<IProps> = () => {
    return (
        <PlayerBarWrapper>
            {/* left */}
            <InfoWrapper>
                <div className="album">
                    <img src={"https://p2.music.126.net/znTzn19zZvZ4IdlKEOhWRg==/109951166564931690.jpg"} alt="" />
                </div>
                <div className="msg">
                    <div className="name">老男孩</div>
                    <div className="arts">Coderkxh · deng</div>
                </div>
            </InfoWrapper>

            {/* center */}
            <ControlWrapper>
                <div className="control">
                    <div className="prev">
                        <IconStepbackward width={18} height={18} />
                    </div>
                    <div className="play">
                        <IconPlayerV1 width={30} height={30} />
                    </div>
                    <div className="next">
                        <IconStepforward width={18} height={18} />
                    </div>
                </div>

                <div className="progress">
                    <div className="ct">00:00</div>
                    <div className="slider">
                        <Slider defaultValue={30} max={100} min={0} />
                    </div>
                    <div className="tt">4:20</div>
                </div>
            </ControlWrapper>

            {/* right */}
            <OtherWrapper>
                <IconMusicList />
                <IconSound />
            </OtherWrapper>
        </PlayerBarWrapper>
    )
}

export default memo(PlayerBar)
