import { memo, useEffect, useRef, useState } from "react"
import type { ReactNode, FC } from "react"
import { Spin } from 'antd';
import { CSSTransition } from "react-transition-group";

// -- custom: utils/hooks...
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux";
import { joinSongArtistNames } from "@/utils";
import { getPlayerURL } from "@/utils/handle-player";

// store
import { changeLyricIndexAction, changeMusicAction } from "../store/module/player";
import { changeCurrentTimeAction, changeDurationAction, changePlayingAction, changeProgressAction } from "../store/module/audio-control";

// -- comp
import Player from "..";
import AudioControl from "./c-cpns/audio-control";
import AudioOperator from "./c-cpns/audio-operator";
import { DetailWrapper, InfoWrapper, PlayerBarWrapper } from "./style"

interface IProps { }

const PlayerBar: FC<IProps> = () => {
    // -- useState/dispatch/...
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false) // -- 记录正在播放歌曲是否正在加载
    const [isShowDetail, setIsShoeDetail] = useState(false) // -- 是否显示播放详情页

    const audioRef = useRef<HTMLAudioElement>(null) // -- 播放器容器 Ref 对象


    // -- Store State
    const { duration, sliding } = useAppSelector(state => ({ // -- audio-control
        duration: state.audioControl.duration, // -- 记录歌曲总时长（ms）
        sliding: state.audioControl.sliding // -- 记录当前是否正在拖拽进度）
    }), appShallowEqual)

    const { showLyric, volume } = useAppSelector(state => ({ // -- audio-operator
        showLyric: state.audioOperator.showLyric,
        volume: state.audioOperator.volume,
    }), appShallowEqual)

    const { currentSong, lyrics, lyricIndex, playMode } = useAppSelector(state => ({ // -- player
        currentSong: state.player.currentSong,
        lyrics: state.player.lyrics,
        lyricIndex: state.player.lyricIndex,
        playMode: state.player.playMode,
    }), appShallowEqual)


    // -- 🔺↓ 音乐播放逻辑代码
    useEffect(() => { // -- 处理音乐切换播放
        // -- 1. 播放音乐
        if (!audioRef.current) return
        if (!currentSong.id) return

        audioRef.current!.src = getPlayerURL(currentSong.id)
        audioRef.current.play().then(res => {
            dispatch(changePlayingAction(true))
            console.log("歌曲播放成功");
        }).catch(err => { // -- 捕获首次进入页面时的错误，防止报错导致程序无法运行
            dispatch(changePlayingAction(false))
            console.log("歌曲播放失败:", err); // -- 歌曲播放失败: DOMException: play() failed because the user didn't interact with the document first. --> 不允许在用户没有交互的情况下直接播放音频 / ...
            // -- ---------
        })

        audioRef.current.volume = volume

        // -- 2. 获取音乐总时长
        dispatch(changeDurationAction(currentSong.dt))
    }, [currentSong])

    const audioTimeUpdateHandle = () => { // -- 音乐播放进度处理
        const currentTime = audioRef.current!.currentTime // -- 1. 获取当前播放时间（s）

        if (!sliding) { // -- 设置当前播放时间/进度 --> 判断当前是否正在拖拽进度条
            dispatch(changeCurrentTimeAction(currentTime * 1000))
            const progress = (currentTime * 1000) / duration * 100 // -- 2， 计算当前进度: (通过当前时间 / 总时长) 获取对应的时间比<区间: [0,1]>，所以需要再乘以 100 使其区间在<区间: [0,100]> --> 更好的记录当前进度
            dispatch(changeProgressAction(progress))
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

    const audioPlayEndedHandle = () => { // -- 监听歌曲自然播放结束 --> 播放下一首
        if (playMode === 2) audioRef.current?.play() // -- 单曲循环
        else dispatch(changeMusicAction(true))
    }

    return (
        <PlayerBarWrapper>
            {/* player bar 展示区 */}
            <>
                {/* left */}
                <InfoWrapper>
                    <div className="album" onClick={e => setIsShoeDetail(true)}>
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

                {/* center --> audio control */}
                <div className="control">
                    <AudioControl audioRef={audioRef} />
                </div>

                {/* right --> audio operation */}
                <div className="operator">
                    <AudioOperator audioRef={audioRef} />
                </div>
            </>

            {/* 🔺audio: 用于音乐的播放，不进行展示（默认没有 control 属性时，audio 就是不展示的） */}
            < audio ref={audioRef}
                onTimeUpdate={audioTimeUpdateHandle}
                onEnded={e => audioPlayEndedHandle()}
                onWaiting={e => { setLoading(true) }}
                onCanPlay={e => { setLoading(false) }}
            />

            {/* 歌词展示: 可能会删，看具体样式... */}
            {
                showLyric && lyrics[lyricIndex]?.text && (
                    <div className="lyric">
                        {lyrics[lyricIndex]?.text}
                    </div>
                )
            }

            {/* 播放详情页的展示 */}
            <DetailWrapper>
                <CSSTransition classNames="player" in={isShowDetail} timeout={250} unmountOnExit>
                    <Player onBackFun={() => setIsShoeDetail(false)} />
                </CSSTransition>
            </DetailWrapper>
        </PlayerBarWrapper >
    )
}

export default memo(PlayerBar)
