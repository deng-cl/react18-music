import { memo, useEffect } from "react"
import type { ReactNode, FC } from "react"
import { OperatorWrapper } from "./style"
import IconLyricOpen from "@/assets/icon/player/icon-lyric-open"
import IconPlayerOrder from "@/assets/icon/player/icon-player-order"
import IconPlayerRepetetion from "@/assets/icon/player/icon-player-repetetion"
import IconLyricNormal from "@/assets/icon/player/icon-lyric-normal"
import IconPlayerRandom from "@/assets/icon/player/icon-player-random"
import IconSoundMute from "@/assets/icon/player/icon-sound-mute"
import { Slider, message } from "antd"
import IconSound from "@/assets/icon/player/icon-sound"
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux"
import { changeShowLyricAction, changeShowPlayListAction, changeShowVolumeControlAction, changeVolumeAction } from "@/views/player/store/module/audio-operator"
import { changePlayModeAction } from "@/views/player/store/module/player"
import IStorage from "@/utils/local-storage"
import IconMusicList from "@/assets/icon/player/icon-music-list"

interface IProps {
    audioRef: React.RefObject<HTMLAudioElement>
}

const AudioOperator: FC<IProps> = (props: IProps) => {
    const { audioRef } = props

    const dispatch = useAppDispatch()

    // -- State
    const { showLyric, showPlayList, showVolumeControl, volume } = useAppSelector(state => ({ // -- audio-operator
        showLyric: state.audioOperator.showLyric,
        showPlayList: state.audioOperator.showPlayList,
        showVolumeControl: state.audioOperator.showVolumeControl,
        volume: state.audioOperator.volume,
    }), appShallowEqual)

    const { playMode } = useAppSelector(state => ({ // -- player
        playMode: state.player.playMode,
    }), appShallowEqual)


    // -- Methods
    const changeShowLyric = () => dispatch(changeShowLyricAction(!showLyric)) // -- 歌词显示切换: 显示/隐藏

    const changeShowVolunmeControl = () => dispatch(changeShowVolumeControlAction(!showVolumeControl)) // -- 音量控件显示切换: 显示/隐藏

    const changePlayMode = () => { // -- 切换播放模式: 顺序/随机/单曲
        const playModes = ["顺序播放", "随机播放", "单曲循环"]

        let newPlayMode = 0
        if (playMode === 0) newPlayMode = 1
        if (playMode === 1) newPlayMode = 2

        dispatch(changePlayModeAction(newPlayMode)) // -- 修改播放模式

        message.open({
            content: playModes[newPlayMode],
            duration: 0.8
        })
    }

    const changeVolumeSlider = (value: number) => { // -- 修改声音 volume 大小
        if (audioRef.current) { // -- 修改声音大小（audio中的volume取值: [0,1]）
            const volume = (value / 100)
            audioRef.current.volume = volume
            IStorage.set("volume", volume) // -- 对 volume 进行本地存储 --> volume 音量数据持久化
            dispatch(changeVolumeAction(volume))
        }
    }

    const changeSongMenuAsider = () => { // -- 显示左侧当前播放列表
        dispatch(changeShowPlayListAction(!showPlayList))
    }

    return (
        <OperatorWrapper>
            <div className="lyric" onClick={changeShowLyric}>
                {
                    showLyric ? <IconLyricOpen /> : <IconLyricNormal />
                }
            </div>
            <div className="playmode" onClick={changePlayMode}>
                {
                    playMode === 0 ? <IconPlayerOrder width={18} height={18} /> :
                        playMode === 1 ? <IconPlayerRandom width={18} height={18} /> : <IconPlayerRepetetion width={18} height={18} />
                }
            </div>
            <div className="volume" >
                <div className="icon" onClick={changeShowVolunmeControl}>
                    { // -- 判断是否为 mute 静音，显示对应的 Icon
                        audioRef.current?.volume === 0 ? <IconSoundMute volume={true} width={18} height={18} /> : <IconSound volume={true} width={18} height={18} />
                    }
                </div>
                {
                    showVolumeControl && <Slider value={volume * 100} defaultValue={volume * 100} vertical
                        onChange={changeVolumeSlider}
                    />
                }
            </div>
            <div className="menu" onClick={changeSongMenuAsider}>
                <IconMusicList />
            </div>
        </OperatorWrapper>
    )
}

export default memo(AudioOperator)
