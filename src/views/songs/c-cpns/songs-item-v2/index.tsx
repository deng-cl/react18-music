import { memo } from "react"
import type { ReactNode, FC } from "react"
import { ItemWrapper } from "./style"
import { formatCount } from "@/utils"
import { useNavigate, useParams } from "react-router-dom"

interface IProps {
    title?: string
    songsInfos: any[]
    isEntire?: boolean
}

const SongsItemV2: FC<IProps> = (props: IProps) => {
    const { songsInfos, title = "Songs Default Title", isEntire = false } = props

    const navigate = useNavigate()
    function songsItemClickHandle(songId: number) { // -- 处理点击歌单
        navigate("/songs-detail/" + songId)
    }


    function toSongsEntirePage(cat: string) {
        navigate("/songs-entire/" + cat)
    }

    return (
        <ItemWrapper>
            <div className="title">
                {!isEntire ? title : title + "（Entire）"}
                {!isEntire && <div className="more" onClick={e => toSongsEntirePage(title === "Songs Default Title" ? "全部" : title)}>查看更多</div>}
            </div>
            <div className="list">
                {
                    songsInfos?.map(item => (
                        <div className="item" key={item.id} onClick={e => songsItemClickHandle(item.id)}>
                            <div className="album">
                                <img src={item.coverImgUrl} alt="" />
                                <div className="count">{formatCount(item.playCount)}</div>
                            </div>
                            <div className="name">{item.name}</div>
                        </div>
                    ))
                }
            </div>
        </ItemWrapper>
    )
}

export default memo(SongsItemV2)
