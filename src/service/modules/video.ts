import http from ".."

export const fetchTopMv = (limit = 50) => { // -- 获取 MV 排行数据 --> 只能获取 50 条
    return http.get({ url: "/top/mv", params: { limit } })
}

export const fetchMVDetailById = (mvid: number) => { // -- 根据 ID 获取对应 MV 详情
    return http.get({ url: "/mv/detail", params: { mvid } })
}

export const fetchMVInfoById = (mvid: number) => { // -- 根据 ID 获取 MV 其它数据（如点赞、评论、转发...）
    return http.get({ url: "/mv/detail/info", params: { mvid } })
}
