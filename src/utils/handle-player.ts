import http from "@/service"

export const getPlayerURL = (id: number) => `https://music.163.com/song/media/outer/url?id=${id}.mp3`

export interface ILyric { time: number, text: string } // -- 歌词解析字段类型
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/ // -- 匹配时间的正则表达式: 如 --> "[00:14:00]出品：央视新闻×网易·云上"
export const parseLyric = (lyricString: string) => { // -- 歌词解析
    const lyrics: ILyric[] = []

    const lines: string[] = lyricString.split("\n") // -- 1. 拿到每一行的歌词数据

    for (const line of lines) { // -- 2. 对每句歌词进行解析成对应的对象
        const result = timeRegExp.exec(line) // 2.1 通过相应正则匹配对应的结果: 解析结果示例: [00:16.32]Ronghao  -->  ['[00:16.32]', '00', '16', '32', index: 0, input: '[00:16.32]Ronghao', groups: undefined] | null
        if (!result) continue // -- 2.2 判断该行歌词是否为 null --> 跳出本次循环

        // 2.3 获取解析出来的 "分/秒/毫秒" 数，并将其都转成毫秒数（方便计算）: ['[00:16.32]', '00', '16', '32', ...] --> "00/16/32"
        const min = Number(result[1]) * 60 * 1000
        const s = Number(result[2]) * 1000
        const ms = result[3].length === 2 ? Number(result[3]) * 10 : Number(result[3])
        const time = min + s + ms// 2.4 计算当前歌词所在的 time 时间（ms）

        const text = line.replace(timeRegExp, "").trim() // -- 2.5 获取当前行歌词文本: 通过 replace 并借助上面解析 time 的正则将对应 time 部分替换成空字符串 ""，剩下的字符就为对应的歌词文本 --> 也可以通过 trim 方法对该文本的首尾空格去除

        if (text.length > 0) lyrics.push({ time, text }) // -- End: 存储当前行解析的结果（time & text） --> 判断当前 text 有值时，才进行添加
    }

    return lyrics
}
