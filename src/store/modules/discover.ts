import { fetchHotPlaySongInfoList, fetchMusicBannerInfo, fetchRecommendSongs } from "@/service/modules/discover";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDiscoverPageDataAction = createAsyncThunk("fetch_discover_data_action", (state, { dispatch }) => {
    fetchMusicBannerInfo().then((res: any) => {
        dispatch(changeBannerAction(res?.banners || []))
    })
    fetchRecommendSongs().then((res: any) => {
        dispatch(changeRecommendSongsAction(res?.result || []))
    })
    fetchHotPlaySongInfoList().then((res: any) => {
        dispatch(changeHotSongListAction(res?.playlist || {}))
    })
})

export interface ISongs { // -- 推荐歌单数据类型
    id: number;
    type: number;
    name: string;
    picUrl: string;
    playCount: number;
    trackCount: number;
    // ....
}

interface IState {
    banner: any[],
    recommendSongs: ISongs[],
    hotSongList: any
}

const initialState: IState = {
    banner: [],
    recommendSongs: [],
    hotSongList: {}
}

const discoverSlice = createSlice({
    name: "discover",
    initialState,
    reducers: {
        changeBannerAction(state, { payload }) {
            state.banner = payload
        },
        changeRecommendSongsAction(state, { payload }) {
            state.recommendSongs = payload
        },
        changeHotSongListAction(state, { payload }) {
            state.hotSongList = payload
        }
    }
})

export const {
    changeBannerAction,
    changeRecommendSongsAction,
    changeHotSongListAction
} = discoverSlice.actions

export default discoverSlice.reducer
