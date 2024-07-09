import http from "@/service"

export const fetchSongInfoById = (ids: number) => {
    return http.get({ url: "/song/detail", params: { ids } })
}

export const fetchSongLyricInfo = (id: number) => {
    return http.get({ url: "/lyric", params: { id } })
}
