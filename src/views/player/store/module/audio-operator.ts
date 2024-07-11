import IStorage from "@/utils/local-storage"
import { createSlice } from "@reduxjs/toolkit"

interface IState {
    showLyric: boolean // -- 记录当前是否显示歌词
    showVolumeControl: boolean // -- 记录是否显示修改声音控件
    volume: number // -- 音量控制
    showPlayList: boolean // -- 是否显示播放列表

}

const volume = IStorage.get("volume")
const initialState: IState = {
    showLyric: false,
    showVolumeControl: false,
    volume: volume >= 0 && volume <= 1 ? volume : 1, // -- 查看本地缓存，是否存在上次设置的音量
    showPlayList: false
}

const audioOperatorSlice = createSlice({
    name: "playbar",
    initialState,
    reducers: {
        changeShowLyricAction(state, { payload }) {
            state.showLyric = payload
        },
        changeShowVolumeControlAction(state, { payload }) {
            state.showVolumeControl = payload
        },
        changeVolumeAction(state, { payload }) {
            state.volume = payload
        },
        changeShowPlayListAction(state, { payload }) {
            state.showPlayList = payload
        },
    }
})

export const {
    changeShowLyricAction,
    changeVolumeAction,
    changeShowPlayListAction,
    changeShowVolumeControlAction
} = audioOperatorSlice.actions

export default audioOperatorSlice.reducer
