import { memo, useEffect, useMemo, useRef, useState, } from "react"
import type { ReactNode, FC, Ref } from "react"
import { SongsDetailInfoWrapper } from "./style"
import { useParams } from "react-router-dom"
import { fetchSongsDetailById } from "@/service/modules/songs"
import * as dayjs from 'dayjs'
import { useAppDispatch } from "@/store/app-react-redux"
import lodash from "lodash"
import { changeLoadingAction } from "@/store/modules/main"
import { useVirtualList } from "ahooks"

interface IProps {
    children?: ReactNode
    playSongsEntireSong: () => any,
    baseInfo: any
    ref?: any
}

const SongsDetailInfo: FC<IProps> = ({
    playSongsEntireSong,
    baseInfo
}) => {

    console.log("info");

    return (
        <SongsDetailInfoWrapper>
            <div className="album">
                <img src={baseInfo?.coverImgUrl} alt="" />
            </div>
            <div className="songs-info">
                <div className="name">{baseInfo?.name}</div>
                <div className="author">
                    <img src={baseInfo?.creator?.avatarUrl} alt="" />
                    <div className="at-name">{baseInfo?.creator?.nickname}</div>
                </div>
                <div className="tags">
                    {
                        baseInfo?.tags?.map((item: string, index: number) => (
                            <div className="tag" key={index}>{item}</div>
                        ))
                    }
                </div>
                <div className="description">
                    {baseInfo?.description}
                </div>

                <div className="player">
                    <div className="_">
                        <div className="btn" onClick={playSongsEntireSong}>播放</div>
                        <div className="count">歌曲总数: {baseInfo?.trackCount}</div>
                    </div>
                    <div className="c-t">创建时间: {
                        (function () {
                            let parseCreateTime = dayjs?.unix(baseInfo?.createTime / 1000) as any
                            const { $y, $M, $D } = parseCreateTime
                            return $y + "/" + ($M + 1) + "/" + $D
                        })()
                    }</div>
                </div>
            </div>
        </SongsDetailInfoWrapper>
    )
}

export default memo(SongsDetailInfo)
