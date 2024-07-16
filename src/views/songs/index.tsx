import { memo, useEffect, useState } from "react"
import type { ReactNode, FC } from "react"
import { SongsWrapper } from "./style"
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux"
import { SongsMenuType, changeFilterFieldsAction, fetchSongsPageDataAction } from "@/store/modules/songs"
import SongsItemV2 from "./c-cpns/songs-item-v2"
import classNames from "classnames"
import KeepAlive from "react-activation"

interface IProps {
    children?: ReactNode
}

const Songs: FC<IProps> = () => {
    const { chinese, ancient, EA, popular, filterFields } = useAppSelector(state => ({
        chinese: state.songs.chinese,
        ancient: state.songs.ancient,
        EA: state.songs.EA,
        popular: state.songs.popular,
        filterFields: state.songs.filterFields
    }), appShallowEqual)

    const dispacth = useAppDispatch()

    // -- filter part
    const cats: SongsMenuType[] = ["华语", "古风", "欧美", "流行"]

    function handleFilter(item: SongsMenuType) {
        let newFilterFields = []

        if (filterFields.includes(item)) newFilterFields = filterFields.filter(f_item => f_item !== item)
        else newFilterFields = [...filterFields, item]

        dispacth(changeFilterFieldsAction(newFilterFields))
    }

    useEffect(() => { // -- 过滤数据
        filterFields.map(type => {
            let isHaveData = false
            console.log(type);
            switch (type) {
                case "华语":
                    if (chinese?.length) isHaveData = true
                    break
                case "古风":
                    if (ancient?.length) isHaveData = true
                    break
                case "欧美":
                    if (EA?.length) isHaveData = true
                    break
                case "流行":
                    if (popular?.length) isHaveData = true
                    break
                default:
                    console.log("Error: songs state --> fetchSongsPageDataAction");
            }

            if (!isHaveData) dispacth(fetchSongsPageDataAction(type))
        })
    }, [filterFields])

    return (
        <SongsWrapper>

            <div className="filter">
                <div className="title">filter:</div>
                {
                    cats.map(item => (
                        <div
                            className={classNames("item", { active: filterFields.includes(item) })}
                            onClick={e => { handleFilter(item) }}
                            key={item}
                        >{item}</div>
                    ))
                }
                <div className="__">暂未对其它类型的歌单进行配置</div>
            </div>

            {
                chinese && <div className="songs-item" style={{ display: filterFields.includes("华语") ? "block" : "none" }}>
                    <SongsItemV2 title="华语" songsInfos={chinese} />
                </div>
            }
            {
                ancient && <div className="songs-item" style={{ display: filterFields.includes("古风") ? "block" : "none" }}>
                    <SongsItemV2 title="古风" songsInfos={ancient} />
                </div>
            }
            {
                EA && <div className="songs-item" style={{ display: filterFields.includes("欧美") ? "block" : "none" }}>
                    <SongsItemV2 title="欧美" songsInfos={EA} />
                </div>
            }
            {
                popular && <div className="songs-item" style={{ display: filterFields.includes("流行") ? "block" : "none" }}>
                    <SongsItemV2 title="流行" songsInfos={popular} />
                </div>
            }
        </SongsWrapper >
    )
}

export default memo(Songs)
