import { memo, useEffect } from "react"
import type { ReactNode, FC } from "react"
import { SongsWrapper } from "./style"
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux"
import { fetchSongsPageDataAction } from "@/store/modules/songs"
import { formatCount } from "@/utils"
import SongsItemV2 from "./c-cpns/songs-item-v2"

interface IProps {
    children?: ReactNode
}

const Songs: FC<IProps> = () => {
    const { chinese, ancient, EA, popular } = useAppSelector(state => ({
        chinese: state.songs.chinese,
        ancient: state.songs.ancient,
        EA: state.songs.EA,
        popular: state.songs.popular,
    }), appShallowEqual)

    const dispacth = useAppDispatch()
    useEffect(() => { // -- 获取 songs 页面数据
        if (!chinese[0]) dispacth(fetchSongsPageDataAction())
    }, [])

    return (
        <SongsWrapper>
            <SongsItemV2 title="华语" songsInfos={chinese} />
            <SongsItemV2 title="古风" songsInfos={ancient} />
            <SongsItemV2 title="欧美" songsInfos={EA} />
            <SongsItemV2 title="流行" songsInfos={popular} />
        </SongsWrapper>
    )
}

export default memo(Songs)
