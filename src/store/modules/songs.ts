import { fetchSongsInfo } from "@/service/modules/songs"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { changeLoadingAction } from "./main"

interface IState {
    entire: any,
    chinese: any, // -- 华语
    ancient: any, // -- 古风
    popular: any, // -- 流行
    EA: any // -- 欧美
}

export const fetchSongsPageDataAction = createAsyncThunk("fetch_songs_page_data_action", (state, { dispatch }) => {
    dispatch(changeLoadingAction(true))

    fetchSongsInfo("华语").then((res: any) => {
        dispatch(changeChineseAction(res.playlists))
        dispatch(changeLoadingAction(false))
    })
    fetchSongsInfo("古风").then((res: any) => {
        dispatch(changeAncientAction(res.playlists))
    })
    fetchSongsInfo("欧美").then((res: any) => {
        dispatch(changeEAAction(res.playlists))
    })
    fetchSongsInfo("流行").then((res: any) => {
        dispatch(changePopularAction(res.playlists))
    })
    fetchSongsInfo("全部").then((res: any) => {
        dispatch(changeEntireAction(res.playlists))
    })
})


const initialState: IState = {
    entire: [],
    chinese: [],
    ancient: [],
    popular: [],
    EA: [],
}

const songsSlice = createSlice({
    name: "songs",
    initialState,
    reducers: {
        changeChineseAction(state, { payload }) {
            state.chinese = payload
        },
        changeAncientAction(state, { payload }) {
            state.ancient = payload
        },
        changePopularAction(state, { payload }) {
            state.popular = payload
        },
        changeEAAction(state, { payload }) {
            state.EA = payload
        },
        changeEntireAction(state, { payload }) {
            state.entire = payload
        },
    }
})

export const {
    changeAncientAction,
    changeChineseAction,
    changeEAAction,
    changePopularAction,
    changeEntireAction
} = songsSlice.actions

export default songsSlice.reducer

