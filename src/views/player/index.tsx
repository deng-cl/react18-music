import { memo } from "react"
import type { ReactNode, FC } from "react"
import { PlayerWrapper } from "./style"
import { useAppSelector } from "@/store/app-react-redux"
import classNames from "classnames"
import AudioControl from "./player-bar/c-cpns/audio-control"
import IconArrowTop from "@/assets/icon/header/icon-arrow-top"


interface IProps {
    audioRef: React.RefObject<HTMLAudioElement>
    onBackFun: () => void,
}

const Player: FC<IProps> = (props: IProps) => {
    const { audioRef, onBackFun } = props

    const { lyrics, lyricIndex, songInfo } = useAppSelector(state => ({ // -- player state
        songInfo: state.player.currentSong,
        lyrics: state.player.lyrics,
        lyricIndex: state.player.lyricIndex,
    }))

    return (
        <PlayerWrapper>
            <div className="left album">
                <div className="cover">
                    <img src={songInfo?.al?.picUrl} alt="" />
                </div>
                <div className="control">
                    <AudioControl audioRef={audioRef} />
                </div>
            </div>

            <div className="right lyric">
                {/* 歌词滚动: 计算歌词向上滚动距离 */}
                <div className="lyric-content" style={{
                    transform: `translateY(calc(30% - ${(lyricIndex + 1) * 18}px))`
                }}>
                    {
                        lyrics.map((line, index) => (
                            <div className={classNames("line", { active: index === lyricIndex })} key={index}>{line.text}</div>
                        ))
                    }
                </div>
            </div>

            <div className="hide-detail" onClick={onBackFun}>
                <IconArrowTop width={24} height={24} />
            </div>
        </PlayerWrapper>
    )
}

export default memo(Player)
