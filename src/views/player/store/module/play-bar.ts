import { AsyncThunkPayloadCreator, ThunkDispatch, UnknownAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchSongInfoById, fetchSongLyricInfo } from "../../service"
import { ILyric, parseLyric } from "@/utils/handle-player"
import { IRootState } from "@/store/app-react-redux"
import IStorage from "@/utils/local-storage"
import { changeLoadingAction } from "@/store/modules/main"

interface IState {
    playing: boolean // -- 记录当前是否正在播放
    currentTime: number // -- 记录当前播放时间（ms）
    progress: number // -- 记录当前播放进度
    duration: number // -- 记录歌曲总时长（ms）
    sliding: boolean // -- 记录当前是否正在拖拽进度
}

const initialState: IState = {
    playing: false,
    currentTime: 0,
    progress: 0,
    duration: 0,
    sliding: false
}

const playBarSlice = createSlice({
    name: "playbar",
    initialState,
    reducers: {
        changePlayingAction(state, { payload }) {
            state.playing = payload
        },
        changeCurrentTimeAction(state, { payload }) {
            state.currentTime = payload
        },
        changeProgressAction(state, { payload }) {
            state.progress = payload
        },
        changeDurationAction(state, { payload }) {
            state.duration = payload
        },
        changeSlidingAction(state, { payload }) {
            state.sliding = payload
        }
    }
})

export const {
    changeCurrentTimeAction,
    changeDurationAction,
    changePlayingAction,
    changeProgressAction,
    changeSlidingAction
} = playBarSlice.actions

export default playBarSlice.reducer
