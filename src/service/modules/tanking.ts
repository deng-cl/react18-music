import http from ".."

/**
 * @param id 新歌:3779629 原创:2884035 飙升:19723756 热歌:3778678
 */
export const fetchFRankingSongMenu = (id: number) => { // -- 根据 id 获取对应的榜单歌曲列表
    return http.get({ url: "/playlist/detail", params: { id } })
}
