import { fetchTopMv } from "@/service/modules/video";
import IStorage from "@/utils/local-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IState {
    isDark: boolean
}

const initialState: IState = {
    isDark: IStorage.get("isDark")
}

const themeSlice = createSlice({
    name: "vidoe",
    initialState,
    reducers: {
        changeThemeIsDarkAction(state, { payload }) {
            IStorage.set("isDark", payload) // -- 本地存储 theme 主题
            state.isDark = payload
        }
    }
})

export const {
    changeThemeIsDarkAction
} = themeSlice.actions

export default themeSlice.reducer
