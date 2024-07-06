import { memo, useEffect } from "react"
import type { ReactNode, FC } from "react"
import { DiscoverWrapper } from "./style"
import { fetchDiscoverPageDataAction } from "@/store/modules/discover"
import { useDispatch } from "react-redux"
import { UnknownAction } from "@reduxjs/toolkit"
import Banner from "./c-cpns/banner"
import SongsItemV1 from "./c-cpns/songs-item-v1"
import { appShallowEqual, useAppSelector } from "@/store/app-react-redux"
import ScrollView from "@/base-ui/scroll-view"

interface IProps {
    children?: ReactNode
}

const Discover: FC<IProps> = () => {
    const { recommendSongs } = useAppSelector(state => ({
        recommendSongs: state.discover.recommendSongs
    }), appShallowEqual)

    const dispatch = useDispatch()
    useEffect(() => { // -- comp mounted --> fetch data
        dispatch(fetchDiscoverPageDataAction() as unknown as UnknownAction)
    }, [])

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
        </DiscoverWrapper>
    )
}

export default memo(Discover)
