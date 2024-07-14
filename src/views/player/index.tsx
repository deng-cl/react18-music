import { memo, useEffect, useRef } from "react"
import type { ReactNode, FC } from "react"
import { PlayerWrapper } from "./style"
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux"
import classNames from "classnames"
import AudioControl from "./player-bar/c-cpns/audio-control"
import IconArrowTop from "@/assets/icon/header/icon-arrow-top"
import { changeShowDetailAction } from "./store/module/player"


interface IProps {
    audioRef: React.RefObject<HTMLAudioElement>
}

const Player: FC<IProps> = (props: IProps) => {
    const { audioRef } = props

    const dispatch = useAppDispatch()

    const { lyrics, lyricIndex, songInfo } = useAppSelector(state => ({ // -- player state
        songInfo: state.player.currentSong,
        lyrics: state.player.lyrics,
        lyricIndex: state.player.lyricIndex,
    }), appShallowEqual)

    const hideDetailPage = () => dispatch(changeShowDetailAction(false))

    // -- 歌词滚动
    const lyricsRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (lyricsRef.current) lyricsRef.current.scrollTo(50, (lyricIndex + 1) * 24)
    }, [lyricIndex])

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

            <div className="right lyric" ref={lyricsRef}>
                {/* 歌词滚动: 计算歌词向上滚动距离 */}
                <div className="lyric-content" >
                    {
                        lyrics.map((line, index) => (
                            <div className={classNames("line", { active: index === lyricIndex })} key={index}>{line.text}</div>
                        ))
                    }
                </div>
            </div>

            <div className="hide-detail" onClick={hideDetailPage}>
                <IconArrowTop width={24} height={24} />
            </div>
        </PlayerWrapper>
    )
}

export default memo(Player)
