import { AsyncThunkPayloadCreator, ThunkDispatch, UnknownAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchSongInfoById, fetchSongLyricInfo } from "../service"
import { ILyric, parseLyric } from "@/utils/handle-player"
import { IRootState } from "@/store/app-react-redux"

interface IState {
    currentSong: any
    lyrics: ILyric[]
    lyricIndex: number

    // -- 播放列表
    playSongList: any[]
    playSongIndex: number

    playMode: 0 | 1 | 2 // -- 0:顺序 1:随机  2:循环（单曲循环只是自然播放下的循环，可以切换新歌）
}

const initialState: IState = {
    currentSong: {},
    lyrics: [],
    lyricIndex: -1,
    playSongList: [
        {
            "name": "只牵你的手",
            "id": 109256,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 3689,
                    "name": "李玖哲",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "600907000000980757",
            "fee": 1,
            "v": 31,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 10830,
                "name": "Baby是我",
                "picUrl": "https://p1.music.126.net/jgH1cEVB_o9X4R5I_9-zUA==/40681930233154.jpg",
                "tns": [],
                "pic": 40681930233154
            },
            "dt": 256522,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 10263031,
                "vd": -42558,
                "sr": 44100
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 6157836,
                "vd": -39963,
                "sr": 44100
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 4105239,
                "vd": -38249,
                "sr": 44100
            },
            "sq": null,
            "hr": null,
            "a": null,
            "cd": "1",
            "no": 7,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 17179877376,
            "originCoverType": 1,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 31,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "awardTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "mst": 9,
            "rtype": 0,
            "rurl": null,
            "cp": 489026,
            "mv": 0,
            "publishTime": 1143820800000
        },
        {
            "name": "可你听见了",
            "id": 2605274338,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 57076584,
                    "name": "DOUDOU",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [
                "《默杀》电影主题曲"
            ],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 4,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 241325374,
                "name": "可你听见了",
                "picUrl": "https://p2.music.126.net/7DO7fn5_G7CtSPrTtenvnw==/109951169759746430.jpg",
                "tns": [],
                "pic_str": "109951169759746430",
                "pic": 109951169759746430
            },
            "dt": 461500,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 18462346,
                "vd": -34428,
                "sr": 44100
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 11077425,
                "vd": -31816,
                "sr": 44100
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 7384964,
                "vd": -30115,
                "sr": 44100
            },
            "sq": {
                "br": 781777,
                "fid": 0,
                "size": 45098774,
                "vd": -34075,
                "sr": 44100
            },
            "hr": null,
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 17179877376,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 4,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "awardTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 0,
            "publishTime": 1720368000000
        },
        {
            "name": "云边的风筝",
            "id": 2600804126,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 1030001,
                    "name": "周深",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [
                "又名：我们的王莺莺"
            ],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 5,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 239910371,
                "name": "云边的风筝",
                "picUrl": "https://p1.music.126.net/eUKlzMz0XJUlxJe5Gk9CpA==/109951169707527020.jpg",
                "tns": [
                    "电影《云边有个小卖部》人物主题曲"
                ],
                "pic_str": "109951169707527020",
                "pic": 109951169707527020
            },
            "dt": 262013,
            "h": {
                "br": 320001,
                "fid": 0,
                "size": 10483245,
                "vd": -20847,
                "sr": 48000
            },
            "m": {
                "br": 192001,
                "fid": 0,
                "size": 6289965,
                "vd": -18223,
                "sr": 48000
            },
            "l": {
                "br": 128001,
                "fid": 0,
                "size": 4193325,
                "vd": -16502,
                "sr": 48000
            },
            "sq": {
                "br": 812098,
                "fid": 0,
                "size": 26597623,
                "vd": -20945,
                "sr": 48000
            },
            "hr": {
                "br": 1580095,
                "fid": 0,
                "size": 51750840,
                "vd": -21087,
                "sr": 48000
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 536879104,
            "originCoverType": 1,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 5,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "awardTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 0,
            "publishTime": 1719072000000,
            "tns": [
                "电影《云边有个小卖部》人物主题曲"
            ]
        },
        {
            "name": "为什么",
            "id": 2145132841,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 12853283,
                    "name": "黄鲲",
                    "tns": [],
                    "alias": []
                },
                {
                    "id": 12195788,
                    "name": "芝麻Mochi",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [
                "原曲：《どうして (feat. 野田愛実) 》"
            ],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 8,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 192048860,
                "name": "为什么",
                "picUrl": "https://p2.music.126.net/t82mBmXeaxKKij8w3Dmfww==/109951169652039710.jpg",
                "tns": [],
                "pic_str": "109951169652039710",
                "pic": 109951169652039710
            },
            "dt": 184400,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 7378605,
                "vd": -67333,
                "sr": 48000
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 4427181,
                "vd": -64782,
                "sr": 48000
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 2951469,
                "vd": -63204,
                "sr": 48000
            },
            "sq": {
                "br": 948840,
                "fid": 0,
                "size": 21870766,
                "vd": -66699,
                "sr": 48000
            },
            "hr": {
                "br": 1717108,
                "fid": 0,
                "size": 39579340,
                "vd": -67155,
                "sr": 48000
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 536879104,
            "originCoverType": 1,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 8,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "awardTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 0,
            "mv": 0,
            "publishTime": 1719417600000
        }
    ],
    playSongIndex: -1,
    playMode: 0
}

const fetchAndDispatchLyricInfo = (id: number, dispatch: ThunkDispatch<unknown, unknown, UnknownAction>) => { // -- 请求歌词函数抽取
    fetchSongLyricInfo(id).then((res: any) => { // -- 获取歌词信息
        if (!res?.lrc) return
        const lyricString = res.lrc.lyric as string
        const lyrics = parseLyric(lyricString) // -- 歌词解析
        dispatch(changeLyricsAction(lyrics)) // -- 存储解析好的歌词
    })
}

// -- createAsyncThunk 函数可以通过泛型定义对应参数的类型: <返回值类型,回调函数参数类型,API类型（如state，dispatch... --> 出入一个对象定义对应类型）>
interface IThunkState {
    state: IRootState
}
export const fetchPlaySongInfoAction = createAsyncThunk<void, number, IThunkState>("fetch-play-song-info", (id: number, { getState, dispatch }) => {
    const state = getState()

    // -- 准备播放该 id 这首歌曲，可以先从当前播放列表中查找是否存在该歌曲，不存在时在进行请求对应的歌曲数据
    const playSongList = state.player.playSongList
    const findIndex = playSongList.findIndex(item => item.id === id)
    if (findIndex !== -1) {// -- 找到相同的 id，即列表中存在该歌曲信息 --> 直接在播放列表中获取对应数据
        const song = playSongList[findIndex]
        dispatch(changeCurrentSongAction(song))
        dispatch(changePlaySongIndexAction(findIndex))
    } else { // -- 在播放列表中没有找对对应的歌曲，请求该歌曲，并将该歌曲放入添加进该播放列表中
        fetchSongInfoById(id).then((res: any) => { // -- 获取歌曲信息
            const song = res?.songs[0]
            if (song) {
                const newPlaySongList = [...state.player.playSongList, song]
                dispatch(changeCurrentSongAction(song))
                dispatch(changePlaySongListAction(newPlaySongList))
                dispatch(changePlaySongIndexAction(newPlaySongList.length - 1))
            }
        })
    }

    fetchAndDispatchLyricInfo(id, dispatch) // replace ↓
    // fetchSongLyricInfo(id).then((res: any) => { // -- 获取歌词信息
    //     if (!res?.lrc) return
    //     const lyricString = res.lrc.lyric as string
    //     const lyrics = parseLyric(lyricString) // -- 歌词解析
    //     dispatch(changeLyricsAction(lyrics)) // -- 存储解析好的歌词
    // })
})

export const changeMusicAction = createAsyncThunk<void, boolean, IThunkState>("change-music", (isNext, { dispatch, getState }) => { // -- 歌曲切换: 上一首/下一首
    const player = getState().player
    const { playMode, playSongIndex, playSongList } = player

    // 根据 playMode 进行对应播放的切换
    let newIndex = playSongIndex
    const songListLength = playSongList.length
    if (playMode === 1) newIndex = Math.floor(Math.random() * songListLength) // -- 随机
    else { // -- 单曲/顺序
        newIndex = isNext ? playSongIndex + 1 : playSongIndex - 1
        // -- 边界判断
        if (newIndex < 0) newIndex = (songListLength - 1)
        if (newIndex === songListLength) newIndex = 0
    }

    console.log(isNext, ":", newIndex);
    // -- 获取当前歌曲并修改相应 state: currentSong/playSongIndex/ --> 请求新歌歌词
    const song = playSongList[newIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(newIndex))
    fetchAndDispatchLyricInfo(song.id, dispatch) // -- 请求新歌词
})

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        changeCurrentSongAction(state, { payload }) {
            state.currentSong = payload
        },
        changeLyricsAction(state, { payload }) {
            state.lyrics = payload
        },
        changeLyricIndexAction(state, { payload }) {
            state.lyricIndex = payload
        },

        changePlaySongListAction(state, { payload }) {
            state.playSongList = payload
        },

        changePlaySongIndexAction(state, { payload }) { // -- 修改下一首/上一首
            state.playSongIndex = payload
        },

        changePlayModeAction(state, { payload }) {
            state.playMode = payload
        }
    }
})

export const {
    changeCurrentSongAction,
    changeLyricsAction,
    changeLyricIndexAction,
    changePlaySongListAction,
    changePlaySongIndexAction,
    changePlayModeAction
} = playerSlice.actions

export default playerSlice.reducer
