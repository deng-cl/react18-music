import { memo, useEffect, useRef } from "react"
import type { ReactNode, FC } from "react"
import { PlayMenuWrapper } from "./style"
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux"
import { formatTime, joinSongArtistNames } from "@/utils"
import classNames from "classnames"
import { changePlaySongIndexAction, fetchPlaySongInfoAction } from "@/views/player/store/module/player"

interface IProps {
    children?: ReactNode
}

const CurrentPlayMenu: FC<IProps> = () => {
    const dispatch = useAppDispatch()

    const { playSongList, playSongIndex } = useAppSelector(state => ({
        playSongList: state.player.playSongList,
        playSongIndex: state.player.playSongIndex
    }), appShallowEqual)

    useEffect(() => {
        console.log(playSongList[0]);
    })

    const changePlaySongById = (id: number) => { // -- 切换歌曲
        dispatch(fetchPlaySongInfoAction(id))
    }

    // -- 处理播放列表的滚动位置（滚动到当前播放歌曲位置）
    const MenuRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!MenuRef.current) return
        const scrollSize = playSongIndex * 44
        MenuRef.current.scrollTo(0, scrollSize)
    }, [playSongIndex])

    return (
        <PlayMenuWrapper ref={MenuRef}>
            {
                playSongList.map((item, index) => (
                    <div className={classNames("item", { active: playSongIndex === index })} onClick={e => changePlaySongById(item?.id)} key={index} >
                        <div className="name">{item?.name}</div>
                        <div className="arts">{joinSongArtistNames(item?.ar)}</div>
                        <div className="duration">{formatTime(item?.dt)}</div>
                    </div>
                ))
            }
        </PlayMenuWrapper>
    )
}

export default memo(CurrentPlayMenu)
