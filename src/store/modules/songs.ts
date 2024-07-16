import { fetchSongsInfo } from "@/service/modules/songs"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { changeLoadingAction } from "./main"

interface IState {
    entire: any,
    chinese: any, // -- 华语
    ancient: any, // -- 古风
    popular: any, // -- 流行
    EA: any, // -- 欧美
    filterFields: SongsMenuType[] // -- 页面数据展示过滤

    songsInfoInEntire: any
}

export type SongsMenuType = "华语" | "古风" | "欧美" | "流行" | "全部"

export const fetchSongsPageDataAction = createAsyncThunk("fetch_songs_page_data_action", (type: SongsMenuType, { dispatch }) => {
    dispatch(changeLoadingAction(true))

    fetchSongsInfo(type).then((res: any) => {
        switch (type) {
            case "华语":
                dispatch(changeChineseAction(res.playlists))
                break
            case "古风":
                dispatch(changeAncientAction(res.playlists))
                break
            case "欧美":
                dispatch(changeEAAction(res.playlists))
                break
            case "流行":
                dispatch(changePopularAction(res.playlists))
                break
            case "全部":
                dispatch(changeEntireAction(res.playlists))
                break
            default:
                console.log("Error: songs state --> fetchSongsPageDataAction");
        }

        dispatch(changeLoadingAction(false))
    })

    // fetchSongsInfo("华语").then((res: any) => {
    //     dispatch(changeChineseAction(res.playlists))
    //     dispatch(changeLoadingAction(false))
    // })

    // fetchSongsInfo("古风").then((res: any) => {
    //     dispatch(changeAncientAction(res.playlists))
    // })

    // fetchSongsInfo("欧美").then((res: any) => {
    //     dispatch(changeEAAction(res.playlists))
    // })

    // fetchSongsInfo("流行").then((res: any) => {
    //     dispatch(changePopularAction(res.playlists))
    // })

    // fetchSongsInfo("全部").then((res: any) => {
    //     dispatch(changeEntireAction(res.playlists))
    // })
})


const initialState: IState = {
    entire: [],
    chinese: [],
    ancient: [],
    popular: [],
    EA: [],
    filterFields: ["华语"],

    songsInfoInEntire: {}
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
        changeFilterFieldsAction(state, { payload }) {
            state.filterFields = payload
        },
        changeSongsInfoInEntireAction(state, { payload }) {
            state.songsInfoInEntire = payload
        }
    }
})

export const {
    changeAncientAction,
    changeChineseAction,
    changeEAAction,
    changePopularAction,
    changeEntireAction,
    changeFilterFieldsAction,
    changeSongsInfoInEntireAction
} = songsSlice.actions

export default songsSlice.reducer

