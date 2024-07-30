import { createSlice } from "@reduxjs/toolkit"

interface IState {
    loading: boolean
    ispc: boolean
}

const initialState: IState = {
    loading: false,
    ispc: true
}

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        changeLoadingAction(state, { payload }) {
            state.loading = payload
        },

        chagneIspcAction(state, { payload }) {
            state.ispc = payload
        }
    }
})

export const { changeLoadingAction, chagneIspcAction } = mainSlice.actions

export default mainSlice.reducer
