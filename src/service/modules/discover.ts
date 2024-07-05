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



