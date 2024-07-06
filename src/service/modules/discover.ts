import http from ".."

enum banner_type_id {
    pc = 0,
    android = 1,
    iphone = 2,
    ipad = 3
}

export const fetchMusicBannerInfo = (type_id: banner_type_id = 0) => {
    return http.get({ url: "/banner", params: { type_id } })
}

export const fetchRecommendSongs = () => {
    return http.get({ url: "/personalized" })
}

export const fetchHotPlaySongInfoList = () => { // -- 获取热歌榜歌曲数据
    return http.get({ url: "/playlist/detail", params: { id: 3778678 } })
}
