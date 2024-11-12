import { memo, useContext, useDeferredValue, useEffect, useMemo, useRef, useState, useTransition } from "react"
import type { ReactNode, FC } from "react"
import { SongListV1Wrapper } from "./style"
import CommomPaganition from "../commom-paganition"
import SongItem from "@/views/discover/c-cpns/song-item"
import { playSongListAction } from "@/views/player/store/module/player"
import { useAppDispatch } from "@/store/app-react-redux"
import lodash from "lodash"
import KeepAlive from "react-activation"
import { AppContext } from "@/App"
import usePageScrollInfo from "@/hooks/usePageScrollInfo"
import useIsDistance from "@/hooks/useIsDistance"
import { Spin } from "antd"
import { useVirtualList } from "ahooks"

interface IProps {
    title: string
    songListInfo: any,
    isVirtualList?: boolean
}


const CommomSongListV1: FC<IProps> = ({
    title,
    songListInfo,
    isVirtualList = false
}: IProps) => {

    const dispatch = useAppDispatch()


    const playSongListEntire = lodash.throttle(() => { // -- 播放列表所有歌曲
        const songList = songListInfo
        if (songList) dispatch(playSongListAction(songList))
    }, 1000)

    // -- new 分页
    const PAGINATION_SIZE = 18
    const [start, setStart] = useState(0)
    const end = start + PAGINATION_SIZE

    // -- new 虚拟列表
    const songList = useMemo(() => songListInfo, [songListInfo])
    const ctnRef = useRef(null)
    const listRef = useRef(null)
    const tempRef = useRef<HTMLDivElement>(null)

    const [list] = useVirtualList(songList, {
        containerTarget: ctnRef,
        wrapperTarget: listRef,
        itemHeight: 40,
        overscan: 8,
    });

    return (
        <SongListV1Wrapper  >
            <div className="song-list" >
                <div className="title" ref={tempRef}>
                    <span>
                        {title || "默认歌单列表标题"}
                        <div className="count">歌曲数量: {songListInfo?.length}</div>
                    </span>
                    <div className="play-entire btn" onClick={playSongListEntire}>播放全部</div>
                </div>

                {
                    isVirtualList ? ( // -- 使用虚拟列表
                        <div className="list-ctn" style={{
                            height: `calc(100vh - ${tempRef.current?.offsetTop ?? 0}px - 130px)`,
                        }} ref={ctnRef}>
                            <div className="list" ref={listRef}>
                                {
                                    list.map(item => (
                                        <div className="item" key={item.index}>
                                            <SongItem songInfo={item.data} />
                                        </div>
                                    ))
                                }
                                <div className="not-more">
                                    暂无更多歌曲
                                </div>
                            </div>
                        </div>
                    ) : ( // -- 使用分页器
                        <>
                            <div className="list" ref={listRef}>
                                {
                                    songListInfo.slice(start, end).map((item: any, i: number) => (
                                        <div className="item" key={item.id ?? i}>
                                            <SongItem songInfo={item} />
                                        </div>
                                    ))
                                }
                            </div>

                            <CommomPaganition
                                defaultPageSize={PAGINATION_SIZE}
                                total={songListInfo?.length || 0}
                                onChange={(e) => {
                                    setStart((e - 1) * 20)
                                }}
                            />
                        </>
                    )
                }




            </div>
        </SongListV1Wrapper>
    )
}

export default memo(CommomSongListV1)
