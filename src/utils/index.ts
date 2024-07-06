
interface IAr {
    id: number,
    name: string
    // ...
}

export function joinSongArtistNames(ars: IAr[]) {
    if (!ars) return ""
    const joind = ars.map(item => item.name)
    return joind.join(" / ")
}


// 格式化时间格式

/**
 * formatTime 时间格式化的辅助函数，使其时间保持以 00:00 的方式进行展示
 * @param time 传入对应的时间
 */
function padLeft(time: number | string) {
    time = time + ""
    return ("00" + time).slice(time.length)
}
/**
 * 时间格式化函数
 * @param time 格式化时间参数
 * @param isMS time 是否以毫秒 ms 为单位，默认 ture <反之需要传入以秒 s 为单位的时间>
 */
export function formatTime(time: number, isMS = true) { // -- 格式化时间
    if (isMS) time = time / 1000 // -- "ms" to "s" <当time为 ms 时>

    const minutes = Math.floor(time / 60)
    const second = Math.floor(time) % 60
    return padLeft(minutes) + ":" + padLeft(second)
}


export function formatCount(num: number | string) { // -- 格式化 count
    num = Number(num)
    if (num > 100000000) {
        return (num / 100000000).toFixed(1) + "亿"
    } else if (num > 10000) {
        return (num / 10000).toFixed(1) + "万"
    } else {
        return num
    }
}
