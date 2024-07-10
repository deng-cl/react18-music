import { createSlice } from "@reduxjs/toolkit"

interface IState {
    loading: boolean
}

const initialState: IState = {
    loading: false
}

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        changeLoadingAction(state, { payload }) {
            state.loading = payload
        }
    }
})

export const { changeLoadingAction } = mainSlice.actions

export default mainSlice.reducer
