import http from ".."

export const fetchSongsInfo = ( // -- 获取歌单列表
    cat: "华语" | "古风" | "欧美" | "流行" | "全部" = "全部",
    limit: number = 50,
    offset: number = 0
) => {
    return http.get({ url: '/top/playlist', params: { cat, limit, offset } })
}

export const fetchSongsDetailById = (id: number | string = 6954660951) => { // -- 获取歌单详情
    return http.get({ url: "/playlist/detail", params: { id } })
}
