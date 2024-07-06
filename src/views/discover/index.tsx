import { memo, useEffect, useState } from "react"
import type { ReactNode, FC } from "react"
import { DiscoverWrapper } from "./style"
import { fetchDiscoverPageDataAction } from "@/store/modules/discover"
import { useDispatch } from "react-redux"
import { UnknownAction } from "@reduxjs/toolkit"
import Banner from "./c-cpns/banner"
import SongsItemV1 from "./c-cpns/songs-item-v1"
import { appShallowEqual, useAppSelector } from "@/store/app-react-redux"
import ScrollView from "@/base-ui/scroll-view"
import SongItem from "./c-cpns/song-item"

import { Pagination } from 'antd';


interface IProps {
    children?: ReactNode
}

const Discover: FC<IProps> = () => {
    const { recommendSongs, hotSongList } = useAppSelector(state => ({
        recommendSongs: state.discover.recommendSongs,
        hotSongList: state.discover.hotSongList,
    }), appShallowEqual)

    const dispatch = useDispatch()
    useEffect(() => { // -- comp mounted --> fetch data
        dispatch(fetchDiscoverPageDataAction() as unknown as UnknownAction)
    }, [])

    // -- 处理分页器
    const [total, setTotal] = useState(0)
    const [curPageCode, setCurPageCode] = useState(0)
    useEffect(() => {
        setTotal(hotSongList?.tracks?.length)
    }, [hotSongList])

    function pageCodeClickHandle(pageCode: number) {
        setCurPageCode(pageCode - 1) // -- 因为 curPageCode 存储的为索引从 0 开始 --> 所以需要减 1
    }

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
            <div className="song-list">
                <div className="list">
                    {
                        (function () {
                            const sliceStart = curPageCode * 10
                            const sliceEnd = sliceStart + 10
                            return (
                                hotSongList?.tracks?.slice(sliceStart, sliceEnd).map((item: any) => (
                                    <div className="item" key={item.id}>
                                        <SongItem songInfo={item} />
                                    </div>
                                ))
                            )
                        })()
                    }
                </div>

                <div className="pagination">
                    <Pagination
                        defaultCurrent={1}
                        defaultPageSize={10}
                        total={total}
                        showSizeChanger={false}
                        onChange={pageCodeClickHandle}
                    />
                </div>
            </div>
        </DiscoverWrapper>

        //  git commit -m "discover 页面中的 song-list 歌曲列表数据展示封装展示"
    )
}

export default memo(Discover)
