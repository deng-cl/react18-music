import { memo, useEffect, useState } from "react"
import type { ReactNode, FC } from "react"
import { DiscoverWrapper } from "./style"
import { fetchDiscoverPageDataAction } from "@/store/modules/discover"
import { UnknownAction } from "@reduxjs/toolkit"
import Banner from "./c-cpns/banner"
import SongsItemV1 from "./c-cpns/songs-item-v1"
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux"
import ScrollView from "@/base-ui/scroll-view"
import CommomSongListV1 from "@/components/commom-song-list-v1"


interface IProps {
    children?: ReactNode
}

const Discover: FC<IProps> = () => {
    const { recommendSongs, hotSongList } = useAppSelector(state => ({
        recommendSongs: state.discover.recommendSongs,
        hotSongList: state.discover.hotSongList,
    }), appShallowEqual)

    const dispatch = useAppDispatch()
    useEffect(() => { // -- comp mounted --> fetch data
        dispatch(fetchDiscoverPageDataAction() as unknown as UnknownAction)
    }, [])

    // -- 歌曲列表歌曲数量
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal(hotSongList?.tracks?.length)
    }, [hotSongList])

    return (
        <DiscoverWrapper>
            <Banner />
            <div className="rec-songs">
                <ScrollView>
                    {
                        recommendSongs.map(item => (
                            <div className="item" key={item.id}>
                                <SongsItemV1 songsInfo={item} />
                            </div>
                        ))
                    }
                </ScrollView>
            </div>

            <CommomSongListV1
                title="Recommend song"
                paginationConfig={{ total: total, defaultPageSize: 10 }}
                songListInfo={hotSongList}
            />
        </DiscoverWrapper>

        //  git commit -m "discover 页面中的 song-list 歌曲列表数据展示封装展示"
    )
}

export default memo(Discover)
