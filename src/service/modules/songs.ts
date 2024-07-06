import http from ".."

export const fetchSongsInfo = ( // -- 获取歌单列表
    cat: "华语" | "古风" | "欧美" | "流行" | "全部" = "全部",
    limit: number = 50,
    offset: number = 0
) => {
    return http.get({ url: '/top/playlist', params: { cat, limit, offset } })
}

