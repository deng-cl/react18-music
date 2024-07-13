import { memo, useEffect } from "react"
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

    return (
        <PlayMenuWrapper>
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
