import { fetchMusicBannerInfo } from "@/service/modules/discover";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDiscoverPageDataAction = createAsyncThunk("fetch_discover_data_action", (state, { dispatch }) => {
    fetchMusicBannerInfo().then((res: any) => {
        dispatch(changeBannerAction(res.banners))
    })
})

interface IState {
    banner: any[]
}

const initialState: IState = {
    banner: []
}

const discoverSlice = createSlice({
    name: "discover",
    initialState,
    reducers: {
        changeBannerAction(state, { payload }) {
            state.banner = payload
        }
    }
})

export const { changeBannerAction } = discoverSlice.actions

export default discoverSlice.reducer
