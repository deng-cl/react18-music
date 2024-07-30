import { fetchFRankingSongMenu } from "@/service/modules/tanking";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { changeLoadingAction } from "./main";

interface IState {
    newSong: any
    original: any
    surge: any
}

const initialState: IState = {
    newSong: {},
    original: {},
    surge: {}
}

export const fetchRankingPageDataAction = createAsyncThunk("fetch-ranking-page-data", (_, { dispatch }) => {
    dispatch(changeLoadingAction(true)) // -- loading...
    const RankingFetchs: Promise<any>[] = [fetchFRankingSongMenu(3779629), fetchFRankingSongMenu(2884035), fetchFRankingSongMenu(19723756)] // -- 顺序: 新歌 / 原创 / 飙升
    Promise.all(RankingFetchs).then(resluts => {
        dispatch(changeNewSongAction(resluts[0]?.playlist ?? {}))
        dispatch(changeOriginalAction(resluts[1]?.playlist ?? {}))
        dispatch(changeSurgeAction(resluts[2]?.playlist ?? {}))

        dispatch(changeLoadingAction(false)) // -- loaded
    })
})

const rankingSlice = createSlice({
    name: "ranking",
    initialState,
    reducers: {
        changeNewSongAction(state, { payload }) {
            state.newSong = payload
        },
        changeOriginalAction(state, { payload }) {
            state.original = payload
        },
        changeSurgeAction(state, { payload }) {
            state.surge = payload
        }
    }
})

export const {
    changeNewSongAction,
    changeOriginalAction,
    changeSurgeAction
} = rankingSlice.actions

export default rankingSlice.reducer
