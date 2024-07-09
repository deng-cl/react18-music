import { createSlice } from "@reduxjs/toolkit"

interface IState {
    currentSong: any
}

const initialState: IState = {
    currentSong: {
        "name": "紫荆花盛开",
        "id": 1959528822,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 4292,
                "name": "李荣浩",
                "tns": [],
                "alias": []
            },
            {
                "id": 8329,
                "name": "梁咏琪",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [
            "香港回归祖国25周年主题歌曲"
        ],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 8,
        "v": 22,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 147166235,
            "name": "紫荆花盛开",
            "picUrl": "https://p1.music.126.net/R7yzr15Ftp4Mf59kTvy_uA==/109951167605022957.jpg",
            "tns": [],
            "pic_str": "109951167605022957",
            "pic": 109951167605022960
        },
        "dt": 210667,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 8428845,
            "vd": -56941,
            "sr": 48000
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 5057325,
            "vd": -54348,
            "sr": 48000
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 3371565,
            "vd": -52666,
            "sr": 48000
        },
        "sq": {
            "br": 993153,
            "fid": 0,
            "size": 26153114,
            "vd": -56931,
            "sr": 48000
        },
        "hr": {
            "br": 1761692,
            "fid": 0,
            "size": 46391367,
            "vd": -56931,
            "sr": 48000
        },
        "a": null,
        "cd": "01",
        "no": 0,
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
        "version": 22,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "awardTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "mv": 14541000,
        "mst": 9,
        "cp": 0,
        "rtype": 0,
        "rurl": null,
        "publishTime": 1656518400000
    }
}

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {

    }
})

export default playerSlice.reducer
