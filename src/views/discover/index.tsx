import { memo, useEffect } from "react"
import type { ReactNode, FC } from "react"
import { DiscoverWrapper } from "./style"
import { fetchDiscoverPageDataAction } from "@/store/modules/discover"
import { UnknownAction } from "@reduxjs/toolkit"
import Banner from "./c-cpns/banner"
import SongsItemV1 from "./c-cpns/songs-item-v1"
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux"
import ScrollView from "@/base-ui/scroll-view"
import CommomSongListV1 from "@/components/commom-song-list-v1"
import KeepAlive from "react-activation"


interface IProps {
    children?: ReactNode
}

const Discover: FC<IProps> = () => {
    const { recommendSongs, hotSongList, ispc } = useAppSelector(state => ({
        recommendSongs: state.discover.recommendSongs,
        hotSongList: state.discover.hotSongList,
        ispc: state.main.ispc,
    }), appShallowEqual)

    const dispatch = useAppDispatch()
    useEffect(() => { // -- comp mounted --> fetch data
        dispatch(fetchDiscoverPageDataAction() as unknown as UnknownAction)
    }, [])


    // -- pc and not pc --> exhibition recommend songs
    const COMMON = (
        recommendSongs.map((item, index) => (
            <KeepAlive cacheKey={"discover:" + index.toString()} name='discover:songItemV1' key={index}>
                <div className="item" >
                    <SongsItemV1 songsInfo={item} />
                </div>
            </KeepAlive>
        ))
    )
    const PC = (
        <ScrollView>
            {
                COMMON
            }
        </ScrollView>
    )
    const NOT_PC = COMMON

    return (
        // <KeepAlive cacheKey="discover" name="discover"  >
        <DiscoverWrapper>
            <Banner />
            <div className="rec-songs">
                {ispc ? PC : NOT_PC}
            </div>

            {
                // <KeepAlive cacheKey={"discover:CommomSongListV1"} name='discover:CommomSongListV1'>
                <CommomSongListV1
                    title="Recommend song"
                    songListInfo={hotSongList?.tracks ?? []}
                />
                // </KeepAlive>
            }

        </DiscoverWrapper >
    )
}

export default memo(Discover)
