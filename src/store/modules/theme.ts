import { fetchTopMv } from "@/service/modules/video";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IState {
    isDark: boolean
}

const initialState: IState = {
    isDark: true
}

const themeSlice = createSlice({
    name: "vidoe",
    initialState,
    reducers: {
        changeThemeIsDarkAction(state, { payload }) {
            state.isDark = payload
        }
    }
})

export const {
    changeThemeIsDarkAction
} = themeSlice.actions

export default themeSlice.reducer
