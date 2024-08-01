import { fetchTopMv } from "@/service/modules/video";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { changeLoadingAction } from "./main";

interface IState {
    MVTop: any
    hideVideo: boolean // -- 当在移动端且菜单栏或者播放详情页在打开时，控制视频播放器隐藏 --> 因为在移动端，有些浏览器播放器会覆盖在菜单栏和播放详情页上
}

const initialState: IState = {
    MVTop: [],
    hideVideo: false
}

export const fetchVideoPageDataAction = createAsyncThunk("fetch-MV-page-data", (state, { dispatch }) => {
    dispatch(changeLoadingAction(true))
    fetchTopMv().then((res: any) => {
        dispatch(changeMVTopAction(res.data ?? []))
        dispatch(changeLoadingAction(false))
    })
})

const videoSlice = createSlice({
    name: "vidoe",
    initialState,
    reducers: {
        changeMVTopAction(state, { payload }) {
            state.MVTop = payload
        },
        changeHideVideoAction(state, { payload }) {
            state.hideVideo = payload
        }
    }
})

export const changeHideVideoAsyncAction = createAsyncThunk("change-hide-video", (hideVideo: boolean, { dispatch }) => { // -- 异步控制播放器的显示（延迟显示...）
    if (!hideVideo) { // -- 当为显示播放器时，延迟180ms再显示，否则在导航栏或播放详情隐藏动画时，播放器还是会覆盖在上面
        setTimeout(() => {
            dispatch(changeHideVideoAction(hideVideo))
        }, 180)
    }
    else dispatch(changeHideVideoAction(hideVideo))
})

export const {
    changeMVTopAction,
    changeHideVideoAction
} = videoSlice.actions

export default videoSlice.reducer
