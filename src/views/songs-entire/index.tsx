import { memo, useContext, useEffect, useReducer, useRef, useState } from "react"
import type { ReactNode, FC } from "react"
import { EntireWrapper } from "./style"
import { fetchSongsInfo } from "@/service/modules/songs"
import { useParams } from "react-router-dom"
import SongsItemV2 from "../songs/c-cpns/songs-item-v2"
import { AppContext } from "@/App"
import CommomPaganition from "@/components/commom-paganition"
import KeepAlive, { AliveScope, useAliveController } from "react-activation"
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux"
import { changeSongsInfoInEntireAction } from "@/store/modules/songs"

interface IProps {
}
// total
let prevCat = "华语" // -- 记录上一次展示的 cat 类型
const SongsEntire: FC<IProps> = (props: IProps) => {
    const { cat = "华语" } = useParams() // -- 歌单类型

    const diapatch = useAppDispatch()
    const { songsInfoInEntire } = useAppSelector(state => ({ // -- 当前页显示的数据
        songsInfoInEntire: state.songs.songsInfoInEntire
    }), appShallowEqual)

    const { refreshScope } = useAliveController()

    const [isLoding, setIsLoding] = useState(false)
    const { pageRef } = useContext(AppContext) as any // -- 获取 App.tsx 中注入的 pageRef 对象，用于操作对应 page 容器的滚动到顶部 ↓

    useEffect(() => { // -- 初次进入请求数据
        if (prevCat !== cat) { // -- 当进入的全部歌单的 cat 类型与上次的不一样时 --> 不使用缓存数据，刷新当前组件缓存 --> 使用新数据
            refreshScope("songEntire:CommomPaganition")
            changePagaginationHandle(0)
        }
        else if (!songsInfoInEntire?.total) changePagaginationHandle(0)

        prevCat = cat // -- 存储本次展示的 entire 页面数据的 cat 类型
    }, [])

    async function changePagaginationHandle(pageCout: number) { // -- 切换对应 pageCode 数据
        setIsLoding(true)

        const offset = (pageCout - 1) * 50
        const res = await fetchSongsInfo(cat as any, 50, offset)

        diapatch(changeSongsInfoInEntireAction(res))

        if (pageRef?.current) pageRef.current.scrollTop = 0 // -- 请求新数据 --> 使其内容区域滚动到顶部

        setIsLoding(false)
    }

    return (
        <EntireWrapper>
            <KeepAlive cacheKey={"songEntire:CommomPaganition"} name='songEntire:CommomPaganition' >
                <SongsItemV2 title={cat} songsInfos={songsInfoInEntire?.playlists} isEntire={true} />
                <CommomPaganition
                    defaultCurrent={1}
                    defaultPageSize={50}
                    total={songsInfoInEntire?.total ?? 0}
                    onChange={changePagaginationHandle}
                />
            </KeepAlive>
            {isLoding && <div className="bg-cover"></div>}
        </EntireWrapper >
    )
}

export default memo(SongsEntire)
