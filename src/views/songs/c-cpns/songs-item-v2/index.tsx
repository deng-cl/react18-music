import { memo } from "react"
import type { ReactNode, FC } from "react"
import { ItemWrapper } from "./style"
import { formatCount } from "@/utils"

interface IProps {
    title?: string
    songsInfos: any[]
}

const SongsItemV2: FC<IProps> = (props: IProps) => {
    const { songsInfos, title = "Songs Default Title" } = props

    function songsItemClickHandle(songId: number) { // -- 处理点击歌单
        console.log(songId);
    }

    return (
        <ItemWrapper>
            <div className="title">{title}</div>
            <div className="list">
                {
                    songsInfos.map(item => (
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
