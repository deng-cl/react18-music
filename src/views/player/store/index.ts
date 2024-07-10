import { AsyncThunkPayloadCreator, ThunkDispatch, UnknownAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchSongInfoById, fetchSongLyricInfo } from "../service"
import { ILyric, parseLyric } from "@/utils/handle-player"
import { IRootState } from "@/store/app-react-redux"
import IStorage from "@/utils/local-storage"

interface IState {
    currentSong: any
    lyrics: ILyric[]
    lyricIndex: number

    // -- 播放列表
    playSongList: any[]
    playSongIndex: number

    playMode: 0 | 1 | 2 // -- 0:顺序 1:随机  2:循环（单曲循环只是自然播放下的循环，可以切换新歌）
}

const initialState: IState = { // -- 本地存储歌曲播放信息
    currentSong: IStorage.get("currentSong") !== "" ? IStorage.get("currentSong") : {},
    lyrics: IStorage.get("lyrics") !== "" ? IStorage.get("lyrics") : [],
    lyricIndex: -1,
    playSongList: IStorage.get("songList") !== "" ? IStorage.get("songList") : [],
    playSongIndex: IStorage.get("songIndex") !== "" ? IStorage.get("songIndex") : [],
    playMode: IStorage.get("playMode") !== "" ? IStorage.get("playMode") : 0,
}

const fetchAndDispatchLyricInfo = (id: number, dispatch: ThunkDispatch<unknown, unknown, UnknownAction>) => { // -- 请求歌词函数抽取
    fetchSongLyricInfo(id).then((res: any) => { // -- 获取歌词信息
        if (!res?.lrc) return
        const lyricString = res.lrc.lyric as string
        const lyrics = parseLyric(lyricString) // -- 歌词解析
        dispatch(changeLyricsAction(lyrics)) // -- 存储解析好的歌词
    })
}

// -- createAsyncThunk 函数可以通过泛型定义对应参数的类型: <返回值类型,回调函数参数类型,API类型（如state，dispatch... --> 出入一个对象定义对应类型）>
interface IThunkState {
    state: IRootState
}
export const fetchPlaySongInfoAction = createAsyncThunk<void, number, IThunkState>("fetch-play-song-info", (id: number, { getState, dispatch }) => { // -- 播放
    const state = getState()

    // -- 准备播放该 id 这首歌曲，可以先从当前播放列表中查找是否存在该歌曲，不存在时在进行请求对应的歌曲数据
    const playSongList = state.player.playSongList
    const findIndex = playSongList.findIndex(item => item.id === id)
    if (findIndex !== -1) {// -- 找到相同的 id，即列表中存在该歌曲信息 --> 直接在播放列表中获取对应数据
        const song = playSongList[findIndex]
        dispatch(changeCurrentSongAction(song))
        dispatch(changePlaySongIndexAction(findIndex))
    } else { // -- 在播放列表中没有找对对应的歌曲，请求该歌曲，并将该歌曲放入添加进该播放列表中
        fetchSongInfoById(id).then((res: any) => { // -- 获取歌曲信息
            const song = res?.songs[0]
            if (song) {
                const newPlaySongList = [...state.player.playSongList, song]
                dispatch(changeCurrentSongAction(song))
                dispatch(changePlaySongListAction(newPlaySongList))
                dispatch(changePlaySongIndexAction(newPlaySongList.length - 1))
            }
        })
    }

    fetchAndDispatchLyricInfo(id, dispatch) // replace ↓
})

export const changeMusicAction = createAsyncThunk<void, boolean, IThunkState>("change-music", (isNext, { dispatch, getState }) => { // -- 歌曲切换: 上一首/下一首
    const player = getState().player
    const { playMode, playSongIndex, playSongList } = player

    // 根据 playMode 进行对应播放的切换
    let newIndex = playSongIndex
    const songListLength = playSongList.length
    if (playMode === 1) newIndex = Math.floor(Math.random() * songListLength) // -- 随机
    else { // -- 单曲/顺序
        newIndex = isNext ? playSongIndex + 1 : playSongIndex - 1
        // -- 越界判断
        if (newIndex < 0) newIndex = (songListLength - 1)
        if (newIndex === songListLength) newIndex = 0
    }

    // -- 获取当前歌曲并修改相应 state: currentSong/playSongIndex/ --> 请求新歌歌词
    const song = playSongList[newIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(newIndex))
    fetchAndDispatchLyricInfo(song.id, dispatch) // -- 请求新歌词
})

export const playSongListAction = createAsyncThunk<void, { id: number,/* ... */ }[], IThunkState>("change-playsong-list", (songMenu = [], { getState, dispatch }) => { // -- 播放整个歌曲列表
    const newSongListPromise: Promise<any>[] = []

    songMenu.forEach(item => item?.id && newSongListPromise.push(fetchSongInfoById(item.id))) // -- 遍历请求歌曲列表的每一首歌曲的信息 --> 将其存入 newSongListPromise 中，通过 Promise 进行统一管理请求的发送...

    Promise.all(newSongListPromise).then((values) => { // -- 通过 Promise.all 同时请求多个请求，并确保数据的存放位置
        const songListInfo: any[] = values.map(item => item.songs[0]) // -- 对歌单所有歌曲请求的数据，映射处里面对应的 song 信息 --> newPlaySongList
        return songListInfo
    }).then(newPlaySongList => {
        dispatch(changePlaySongListAction(newPlaySongList)) // -- 更新播放列表

        // -- ↓ 根据 playMode 对歌单列表进行播放
        if (getState().player.playMode !== 1) { // -- 非随机播放: 从第一首开始进行播放 --> (随机播放: 直接调用对应的播放方法即可，不需要经过此处理)
            dispatch(changePlaySongIndexAction(newPlaySongList.length - 1)) // -- playSongIndex: 最后一个 song --> 因为方便下面直接通过 dispatch changeMusicAction 来进行下一曲进行播放第一首
            fetchAndDispatchLyricInfo(newPlaySongList[0].id, dispatch)// -- lyric
        }

        dispatch(changeMusicAction(true)) // -- 播放新列表中的歌曲
    })
})

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        changeCurrentSongAction(state, { payload }) {
            IStorage.set("currentSong", payload) // -- 缓存当前播放歌曲信息
            state.currentSong = payload
        },
        changeLyricsAction(state, { payload }) {
            IStorage.set("lyrics", payload) // -- 缓存当前播放歌词
            state.lyrics = payload
        },
        changeLyricIndexAction(state, { payload }) {
            state.lyricIndex = payload
        },

        changePlaySongListAction(state, { payload }) {
            IStorage.set("songList", payload) // -- 缓存当前播放列表
            state.playSongList = payload
        },

        changePlaySongIndexAction(state, { payload }) { // -- 修改下一首/上一首
            IStorage.set("songIndex", payload) // -- 缓存当前播放索引
            state.playSongIndex = payload
        },

        changePlayModeAction(state, { payload }) {
            IStorage.set("playMode", payload) // -- 缓存当前播放索引
            state.playMode = payload
        }
    }
})

export const {
    changeCurrentSongAction,
    changeLyricsAction,
    changeLyricIndexAction,
    changePlaySongListAction,
    changePlaySongIndexAction,
    changePlayModeAction
} = playerSlice.actions

export default playerSlice.reducer
