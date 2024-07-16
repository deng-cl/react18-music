import { memo, useEffect, useState } from "react"
import type { ReactNode, FC } from "react"
import { RankingWrapper } from "./style"
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux"
import { fetchRankingPageDataAction } from "@/store/modules/ranking"
import classNames from "classnames"
import CommomSongListV1 from "@/components/commom-song-list-v1"
import KeepAlive from "react-activation"

interface IProps {
    children?: ReactNode
}

type RankingType = "NewSong" | "Original" | "Surge"

const Ranking: FC<IProps> = () => {
    const dispatch = useAppDispatch()

    const { newSong, original, surge } = useAppSelector(state => ({
        newSong: state.ranking.newSong,
        original: state.ranking.original,
        surge: state.ranking.surge
    }), appShallowEqual)

    const [curShowMenuTitle, setCurShowMenuTitle] = useState<RankingType>("NewSong")
    const [songMenu, setSongMenu] = useState<any>({}) // -- 所要展示的歌曲列表

    useEffect(() => {
        if (newSong.name && newSong.name !== "") return // -- 已有数据 --> 不需要再重复请求
        dispatch(fetchRankingPageDataAction())
    }, [])

    useEffect(() => { // -- 数据加载成功
        setSongMenu(newSong)
    }, [newSong])

    // const switchSongMenuExhibition = (name: RankingType) => { // -- 切换歌曲榜单列表展示
    //     if (name === "NewSong") setSongMenu(newSong)
    //     else if (name === "Original") setSongMenu(original)
    //     else setSongMenu(surge)
    // }

    const getSongMenuByName = (name: RankingType) => { // -- 切换歌曲榜单列表展示
        if (name === "NewSong") return newSong
        else if (name === "Original") return original
        else return surge
    }

    return (
        <RankingWrapper>
            <div className="filter">
                <div className="title">Change:</div>
                {
                    (() => {
                        const MenuList: RankingType[] = ["NewSong", "Original", "Surge"]
                        return MenuList.map(item =>
                            <div className={classNames("item", { active: curShowMenuTitle === item })} key={item}
                                onClick={e => { setCurShowMenuTitle(item) }}
                            >{item}</div>)
                    })()
                }
            </div>
            <KeepAlive cacheKey={"ranking:..."} name='ranking:...'>
                <div className="content">
                    {
                        (["NewSong", "Original", "Surge"] as RankingType[]).map(item => (
                            <div className="item" key={item} style={{
                                display: curShowMenuTitle === item ? "block" : "none"
                            }}>
                                <CommomSongListV1
                                    title={item === "NewSong" ? "新歌榜" : item === "Original" ? "原创榜" : "飙升榜"}
                                    paginationConfig={{ total: getSongMenuByName(item)?.tracks?.length, defaultPageSize: 10 }}
                                    songListInfo={getSongMenuByName(item)}
                                />
                            </div>
                        ))
                    }
                </div>
            </KeepAlive>
        </RankingWrapper>
    )
}

export default memo(Ranking)
