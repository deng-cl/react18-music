import { fetchTopMv } from "@/service/modules/video";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IState {
    MVTop: any
}

const initialState: IState = {
    MVTop: []
}

export const fetchVideoPageDataAction = createAsyncThunk("fetch-MV-page-data", (state, { dispatch }) => {
    fetchTopMv().then((res: any) => {
        dispatch(changeMVTopAction(res.data))
    })
})

const videoSlice = createSlice({
    name: "vidoe",
    initialState,
    reducers: {
        changeMVTopAction(state, { payload }) {
            state.MVTop = payload
        }
    }
})

export const {
    changeMVTopAction
} = videoSlice.actions

export default videoSlice.reducer
