import { memo, useEffect, useState } from "react"
import type { ReactNode, FC } from "react"
import { SongsDetailWrapper } from "./style"
import { useParams } from "react-router-dom"
import { fetchSongsDetailById } from "@/service/modules/songs"
import * as dayjs from 'dayjs'
import SongItem from "../discover/c-cpns/song-item"
import { useAppDispatch } from "@/store/app-react-redux"
import { playSongListAction } from "../player/store/module/player"

interface IProps {
    children?: ReactNode
}

const SongsDetail: FC<IProps> = () => {
    const { id } = useParams() // -- 获取路由跳转传递的参数 --> 歌单 ID
    const dispatch = useAppDispatch()

    const [detailInfo, setDetailInfo] = useState<any>({})

    useEffect(() => {
        fetchSongsDetailById(id).then((res: any) => {
            setDetailInfo(res.playlist)
        })

        console.log(dayjs.unix(1630769207371 / 1000));
    }, [])

    function playSongsEntireSong() { // -- 播放歌单所有歌曲
        if (detailInfo?.tracks) dispatch(playSongListAction(detailInfo?.tracks))
    }

    return (
        <SongsDetailWrapper>
            <div className="info">
                <div className="album">
                    <img src={detailInfo?.coverImgUrl} alt="" />
                </div>
                <div className="songs-info">
                    <div className="name">{detailInfo?.name}</div>
                    <div className="author">
                        <img src={detailInfo?.creator?.avatarUrl} alt="" />
                        <div className="at-name">{detailInfo?.creator?.nickname}</div>
                        {/* <div className="at-name">{detailInfo?.creator?.signature}</div> */}
                    </div>
                    <div className="tags">
                        {
                            detailInfo?.tags?.map((item: string, index: number) => (
                                <div className="tag" key={index}>{item}</div>
                            ))
                        }
                    </div>
                    <div className="description">
                        {detailInfo?.description}

                    </div>

                    <div className="player">
                        <div className="_">
                            <div className="btn" onClick={playSongsEntireSong}>播放</div>
                            <div className="count">歌曲总数: {detailInfo?.trackCount}</div>
                        </div>
                        <div className="c-t">创建时间: {
                            (function () {
                                let parseCreateTime = dayjs?.unix(detailInfo?.createTime / 1000) as any
                                const { $y, $M, $D } = parseCreateTime
                                return $y + "/" + $M + "/" + $D
                            })()
                        }</div>
                    </div>
                </div>
            </div>

            <div className="songs">
                <div className="title">songs</div>
                <div className="list">
                    {
                        detailInfo?.tracks?.map((item: any) => (
                            <div className="item" key={item.id}>
                                <SongItem songInfo={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </SongsDetailWrapper>
    )
}

export default memo(SongsDetail)
