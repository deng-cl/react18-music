import { memo, useState } from "react"
import type { ReactNode, FC, Ref } from "react"
import { ControlWrapper } from "./style"
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux"
import { changeMusicAction } from "@/views/player/store/module/player"
import IconStepbackward from "@/assets/icon/player/icon-stepbackward"
import IconPause from "@/assets/icon/player/icon-pause"
import IconPlayerV1 from "@/assets/icon/player/icon-player-v1"
import IconStepforward from "@/assets/icon/player/icon-stepforward"
import { Slider, message } from "antd"
import { formatTime } from "@/utils"
import { changeCurrentTimeAction, changePlayingAction, changeProgressAction, changeSlidingAction } from "@/views/player/store/module/play-bar"

interface IProps {
    children?: ReactNode,
    audioRef: React.RefObject<HTMLAudioElement>

}

const AudioControl: FC<IProps> = (props: IProps) => {
    const { audioRef } = props

    const dispatch = useAppDispatch()

    const {
        currentTime, playing, progress, duration, sliding
    } = useAppSelector(state => ({
        currentTime: state.playBar.currentTime, // -- 记录当前播放时间（ms）
        playing: state.playBar.playing, // -- 记录当前是否正在播放
        progress: state.playBar.progress, // -- 记录当前播放进度
        duration: state.playBar.duration, // -- 记录歌曲总时长（ms）
        sliding: state.playBar.sliding // -- 记录当前是否正在拖拽进度）
    }), appShallowEqual)


    const { currentSong } = useAppSelector(state => ({ // -- 获取当前播放歌曲信息
        currentSong: state.player.currentSong,
    }), appShallowEqual)

    // -- 歌曲切换
    function changeMusicHandle(isNext = true) {
        dispatch(changeMusicAction(isNext))
    }

    // -- 播放/暂停
    function playBtnClickHandle() { // -- 处理用户点击播放音乐 <播放/暂停>
        playing // -- 1. 播放/暂停 --> 当前状态
            ? audioRef.current!.pause()
            : audioRef.current!.play().catch(err => {
                dispatch(changePlayingAction(false))
                dispatch(changeMusicAction(true))
                message.error({
                    content: "播放失败，已自动切换至下一首!（NOT VIP）"
                })
            })

        dispatch(changePlayingAction(!playing)) // -- 2. 修改 playing 状态 --> 因为 setplaying 是异步的，所以可以先进行对应的播放或暂停，后再修改对应 playing 状态
    }

    // -- 处理 slider 的点击与拖动
    function sliderChangeCompleteHandle(value: number) { // -- 监听点击 slider 进度 --> 改变对应音乐播放时间 <滑动结束...>
        dispatch(changeSlidingAction(false))
        changeProgress(value)

        if (!playing) { // -- 当当前为非播放状态是，改变 slider 值时，自动进行播放
            audioRef.current?.play()
            dispatch(changePlayingAction(true))
        }
    }

    function sliderChangeHandle(value: number) { // -- 监听滑动 slider 进度 --> 改变对应音乐播放时间
        dispatch(changeSlidingAction(true))
        changeProgress(value)
    }

    function changeProgress(value: number) {
        const changeTime = (value / 100) * duration // -- 1. 获取点击位置的时间: value / 100 * duration

        if (!sliding) audioRef.current!.currentTime = changeTime / 1000 // -- 2. 设置对应的 currentTime （ms -> s） --> 判断当前是否正在拖拽进度条

        // -- 3. 设置当前时间/进度
        dispatch(changeCurrentTimeAction(changeTime))
        dispatch(changeProgressAction(value))
    }

    return (
        <ControlWrapper>
            <div className="control">
                <div className="prev" onClick={e => changeMusicHandle(false)}>
                    <IconStepbackward width={18} height={18} />
                </div>
                <div className="play" onClick={playBtnClickHandle}>
                    {/* playing */}
                    {
                        playing ? <IconPause width={30} height={30} /> : <IconPlayerV1 width={30} height={30} />
                    }
                </div>
                <div className="next" onClick={e => changeMusicHandle(true)}>
                    <IconStepforward width={18} height={18} />
                </div>
            </div>

            <div className="progress">
                <div className="ct">{formatTime(currentTime)}</div>
                <div className="slider">
                    <Slider value={progress} step={0.4} tooltip={{ open: false }}
                        onChangeComplete={sliderChangeCompleteHandle}
                        onChange={sliderChangeHandle}
                        disabled={!currentSong?.id && true && !!audioRef.current} // -- 当当前暂无歌曲播放时，禁用 slider 滑块
                    />
                </div>
                <div className="tt" >{currentSong?.dt ? formatTime(currentSong?.dt) : "00:00"}</div>
            </div>
        </ControlWrapper>
    )
}

export default memo(AudioControl)


