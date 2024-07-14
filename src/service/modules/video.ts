import http from ".."

export const fetchTopMv = (limit = 50) => { // -- 获取 MV 排行数据 --> 只能获取 50 条
    return http.get({ url: "/top/mv", params: { limit } })
}

export const fetchMVDetailById = (mvid: number) => { // -- 根据 ID 获取对应 MV 详情
    return http.get({ url: "/mv/detail", params: { mvid } })
}

export interface IMVInfo {
    likedCount: number,
    shareCount: number,
    commentCount: number
}
export const fetchMVPlayerURLById = (id: number) => { // -- 根据 ID 获取对应 MV 播放地址
    return http.get<IMVInfo>({ url: "/mv/url", params: { id, r: "1080" } })
}

export const fetchMVInfoById = (mvid: number) => { // -- 根据 ID 获取 MV 其它数据（如点赞、评论、转发...）
    return http.get({ url: "/mv/detail/info", params: { mvid } })
}

/**
 * @param id 资源 id, 如歌曲 id,mv id
 * @param sortType 排序方式, 1:按推荐排序, 2:按热度排序, 3:按时间排序 -- 默认 3
 * @param pageSize 分页参数,每页多少条数据,默认 20
 * @param pageNo 分页参数,第 N 页,默认为 1
 * @param type 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型
 * @returns
 */
//  fetchMVCommentsById(id as any, sortType, 16, commentPage + 1) as any
// http://localhost:3000/comment/new?type=0&id=1407551413&sortType=3&cursor=1602072870260&pageSize=2&pageNo=1
export const fetchMVCommentsById = (
    id: number,
    sortType: number = 3,
    pageSize: number = 20,
    pageNo: number = 1,
    cursor: number | null = null,
    type: number = 1,
) => {
    const params: any = { id, sortType, pageSize, pageNo, type }
    if (cursor) params.cursor = cursor
    return http.get({ url: "/comment/new", params })
}

export const fetchSimiMVById = (mvid: number) => { // --根据 ID 获取对应 MV 相关 MVS
    return http.get({ url: "/simi/mv", params: { mvid } })
}
