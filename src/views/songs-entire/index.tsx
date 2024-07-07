import { memo, useContext, useEffect, useState } from "react"
import type { ReactNode, FC } from "react"
import { EntireWrapper } from "./style"
import { fetchSongsInfo } from "@/service/modules/songs"
import { Pagination } from "antd"
import { useParams } from "react-router-dom"
import SongsItemV2 from "../songs/c-cpns/songs-item-v2"
import { AppContext } from "@/App"
import CommomPaganition from "@/components/commom-paganition"

interface IProps {
}
// total
const SongsEntire: FC<IProps> = (props: IProps) => {
    const { cat = "华语" } = useParams() // -- 歌单类型

    const [data, setData] = useState<any>({}) // -- 数据存储

    useEffect(() => { // -- 初次进入请求数据
        changePagaginationHandle(0)
    }, [])

    const [isLoding, setIsLoding] = useState(false)
    const { pageRef } = useContext(AppContext) as any // -- 获取 App.tsx 中注入的 pageRef 对象，用于操作对应 page 容器的滚动到顶部 ↓
    async function changePagaginationHandle(pageCout: number) { // -- 切换对应 pageCode 数据
        const offset = (pageCout - 1) * 50
        setIsLoding(true)
        const res = await fetchSongsInfo(cat as any, 50, offset)
        setData(res)
        setIsLoding(false)
        pageRef.current.scrollTop = 0 // -- 请求新数据 --> 使其内容区域滚动到顶部
    }

    return (
        <EntireWrapper>
            <SongsItemV2 title={cat} songsInfos={data?.playlists} isEntire={true} />
            <CommomPaganition
                defaultCurrent={1}
                defaultPageSize={50}
                total={data.total ?? 0}
                onChange={changePagaginationHandle}
            />
            {isLoding && <div className="bg-cover"></div>}
        </EntireWrapper>
    )
}

export default memo(SongsEntire)
