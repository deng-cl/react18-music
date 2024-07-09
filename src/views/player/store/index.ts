import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchSongInfoById, fetchSongLyricInfo } from "../service"
import { ILyric, parseLyric } from "@/utils/handle-player"

interface IState {
    currentSong: any
    lyrics: ILyric[]
}

const initialState: IState = {
    currentSong: {},
    lyrics: []
}

export const fetchPlaySongInfoAction = createAsyncThunk("fetch-play-song-info", (id: number, { dispatch }) => {
    fetchSongInfoById(id).then((res: any) => { // -- 获取歌曲信息
        if (res?.songs && res.songs[0]) dispatch(changeCurrentSongAction(res.songs[0]))
    })
    fetchSongLyricInfo(id).then((res: any) => { // -- 获取歌词信息
        if (!res?.lrc) return
        const lyricString = res.lrc.lyric as string
        const lyrics = parseLyric(lyricString) // -- 歌词解析
        dispatch(changeLyricsAction(lyrics))

        console.log(lyrics);

    })
})

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        changeCurrentSongAction(state, { payload }) {
            state.currentSong = payload
        },
        changeLyricsAction(state, { payload }) {
            state.lyrics = payload
        }
    }
})

export const { changeCurrentSongAction, changeLyricsAction } = playerSlice.actions

export default playerSlice.reducer
