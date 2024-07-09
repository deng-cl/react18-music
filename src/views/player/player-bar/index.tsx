import { memo, useEffect, useRef, useState } from "react"
import type { ReactNode, FC } from "react"
import { Slider } from 'antd';
import { Spin } from 'antd';

import { ControlWrapper, InfoWrapper, OtherWrapper, PlayerBarWrapper } from "./style"
import IconMusicList from "@/assets/icon/player/icon-music-list"
import IconSound from "@/assets/icon/player/icon-sound"
import IconStepbackward from "@/assets/icon/player/icon-stepbackward"
import IconStepforward from "@/assets/icon/player/icon-stepforward"
import IconPlayerV1 from "@/assets/icon/player/icon-player-v1"
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux";
import { formatTime, joinSongArtistNames } from "@/utils";

import { getPlayerURL } from "@/utils/handle-player";
import IconPause from "@/assets/icon/player/icon-pause";
import { changeLyricIndexAction } from "../store";

interface IProps {
    children?: ReactNode
}

const PlayerBar: FC<IProps> = () => {
    const [isPlaying, setIsPlaying] = useState(false) // -- 记录当前是否正在播放
    const [progress, setProgress] = useState(0) // -- 记录当前播放进度
    const [currentTime, setCurrentTime] = useState(0) // -- 记录当前播放时间（ms）
    const [duration, setDuration] = useState(0) // -- 记录歌曲总时长（ms）
    const [loading, setLoading] = useState(false) // -- 记录正在播放歌曲是否正在加载
    const [isSliding, setIsSliding] = useState(false) // -- 距离当前是否正在拖拽进度

    const { currentSong, lyrics, lyricIndex } = useAppSelector(state => ({ // -- 获取当前播放歌曲信息
        currentSong: state.player.currentSong,
        lyrics: state.player.lyrics,
        lyricIndex: state.player.lyricIndex
    }), appShallowEqual)

    const dispatch = useAppDispatch()

    // -- 🔺↓ 音乐播放逻辑代码
    const audioRef = useRef<HTMLAudioElement>(null)
    useEffect(() => { // -- 处理音乐切换播放
        // -- 1. 播放音乐
        if (!audioRef.current) return
        audioRef.current!.src = getPlayerURL(currentSong.id)
        audioRef.current.play().then(res => {
            setIsPlaying(true)
            console.log("歌曲播放成功");
        }).catch(err => { // -- 捕获首次进入页面时的错误，防止报错导致程序无法运行
            setIsPlaying(false)
            console.log("歌曲播放失败:", err); // -- 歌曲播放失败: DOMException: play() failed because the user didn't interact with the document first. --> 不允许在用户没有交互的情况下直接播放音频 / ...
        })

        // -- 2. 获取音乐总时长
        setDuration(currentSong.dt)
    }, [currentSong])

    function playBtnClickHandle() { // -- 处理用户点击播放音乐 <播放/暂停>
        isPlaying // -- 1. 播放/暂停 --> 当前状态
            ? audioRef.current!.pause()
            : audioRef.current!.play().catch(err => setIsPlaying(false))

        setIsPlaying(!isPlaying) // -- 2. 修改 isPlaying 状态 --> 因为 setIsPlaying 是异步的，所以可以先进行对应的播放或暂停，后再修改对应 isPlaying 状态
    }

    function audioTimeUpdateHandle() { // -- 音乐播放进度处理
        const currentTime = audioRef.current!.currentTime // -- 1. 获取当前播放时间（s）

        if (!isSliding) { // -- 设置当前播放时间/进度 --> 判断当前是否正在拖拽进度条
            setCurrentTime(currentTime * 1000)
            const progress = (currentTime * 1000) / duration * 100 // -- 2， 计算当前进度: (通过当前时间 / 总时长) 获取对应的时间比<区间: [0,1]>，所以需要再乘以 100 使其区间在<区间: [0,100]> --> 更好的记录当前进度
            setProgress(progress)
        }

        // -- 根据时间匹配相应的歌词 --> 并对歌词匹配进行节流（防止过多的进行重复渲染）
        let index = lyrics.length - 1// -- 特殊情况: 因为该算法在匹配歌词中是通过匹配到大于当前时间的，所以正在的歌词还需要向前一位，所以会有一个问题，就是最后一句歌词是无法获取到的（所以这里给默认值可以是最后一个歌词）
        for (let i = 0; i < lyrics.length; i++) {
            if (lyrics[i].time > (currentTime * 1000)) {
                index = i - 1
                break
            }
        }
        if (index === lyricIndex) return // -- 避免过多重复渲染
        dispatch(changeLyricIndexAction(index)) // -- ↑ 当当前 index 与 lyricIndex 不一样是才修改 state 对应的歌词 index --> 🔺节流: 避免组件在同一句歌词中多次 dispatch 该 action，导致页面有过多的没有必要的渲染
    }


    // -- 处理 slider 的点击与拖动
    function sliderChangeCompleteHandle(value: number) { // -- 监听点击 slider 进度 --> 改变对应音乐播放时间 <滑动结束...>
        setIsSliding(false)
        changeProgress(value)

        if (!isPlaying) { // -- 当当前为非播放状态是，改变 slider 值时，自动进行播放
            audioRef.current?.play()
            setIsPlaying(true)
        }
    }

    function sliderChangeHandle(value: number) { // -- 监听滑动 slider 进度 --> 改变对应音乐播放时间
        setIsSliding(true)
        changeProgress(value)
    }

    function changeProgress(value: number) {
        const changeTime = (value / 100) * duration // -- 1. 获取点击位置的时间: value / 100 * duration

        if (!isSliding) audioRef.current!.currentTime = changeTime / 1000 // -- 2. 设置对应的 currentTime （ms -> s） --> 判断当前是否正在拖拽进度条

        // -- 3. 设置当前时间/进度
        setCurrentTime(changeTime)
        setProgress(value)
    }
    return (
        <PlayerBarWrapper>
            {/* player bar 展示区 */}
            <>
                {/* left */}
                <InfoWrapper>
                    <div className="album">
                        <img src={currentSong?.al?.picUrl} alt="" />
                    </div>
                    <div className="msg">
                        <div className="name">{currentSong?.name || "暂无歌曲播放"}</div>
                        <div className="arts">{joinSongArtistNames(currentSong?.ar) || "coderkxh"}</div>
                    </div>
                    <div className="loding">
                        {
                            currentSong?.id && loading && ( // -- 歌曲加载中
                                <div className="loding">
                                    <Spin size="small" />
                                </div>
                            )
                        }
                    </div>
                </InfoWrapper>

                {/* center */}
                <ControlWrapper>
                    <div className="control">
                        <div className="prev">
                            <IconStepbackward width={18} height={18} />
                        </div>
                        <div className="play" onClick={playBtnClickHandle}>
                            {/* isPlaying */}
                            {
                                isPlaying ? <IconPause width={30} height={30} /> : <IconPlayerV1 width={30} height={30} />
                            }
                        </div>
                        <div className="next">
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

                {/* right */}
                <OtherWrapper>
                    <IconMusicList />
                    <IconSound />
                </OtherWrapper>
            </>

            {/* 🔺audio: 用于音乐的播放，不进行展示（默认没有 control 属性时，audio 就是不展示的） */}
            < audio ref={audioRef}
                onTimeUpdate={audioTimeUpdateHandle}
                onEnded={e => setIsPlaying(false)}
                onWaiting={e => { setLoading(true) }}
                onCanPlay={e => { setLoading(false) }}
            />

            {/* 歌词展示: 可能会删，看具体样式... */}
            <div className="lyric">
                {lyrics[lyricIndex]?.text}
            </div>
        </PlayerBarWrapper >
    )
}

export default memo(PlayerBar)
