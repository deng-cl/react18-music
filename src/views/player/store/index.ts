import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchSongInfoById } from "../service"

interface IState {
    currentSong: any
}

const initialState: IState = {
    currentSong: {}
}

export const fetchPlaySongInfoAction = createAsyncThunk("fetch-play-song-info", (ids: number, { dispatch }) => {
    fetchSongInfoById(ids).then((res: any) => {
        if (res?.songs && res.songs[0]) dispatch(changeCurrentSongAction(res.songs[0]))
    })
})

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        changeCurrentSongAction(state, { payload }) {
            state.currentSong = payload
        }
    }
})

export const { changeCurrentSongAction } = playerSlice.actions

export default playerSlice.reducer
