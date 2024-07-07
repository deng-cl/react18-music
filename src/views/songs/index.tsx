import { memo, useEffect, useState } from "react"
import type { ReactNode, FC } from "react"
import { SongsWrapper } from "./style"
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux"
import { fetchSongsPageDataAction } from "@/store/modules/songs"
import SongsItemV2 from "./c-cpns/songs-item-v2"
import classNames from "classnames"

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


    // -- filter part
    const cats = ["华语", "古风", "欧美", "流行"]
    const [filterFields, setFilterFields] = useState<string[]>(["华语", "古风", "欧美", "流行"])
    function handleFilter(item: string) {
        let newFilterFields = []

        if (filterFields.includes(item)) newFilterFields = filterFields.filter(f_item => f_item !== item)
        else newFilterFields = [...filterFields, item]

        setFilterFields(newFilterFields)
    }
    return (
        <SongsWrapper>
            <div className="filter">
                <div className="title">filter:</div>
                {
                    cats.map(item => (
                        <div
                            className={classNames("item", { active: filterFields.includes(item) })}
                            onClick={e => handleFilter(item)}
                            key={item}
                        >{item}</div>
                    ))
                }
                <div className="__">暂未对其它类型的歌单进行配置</div>
            </div>

            {filterFields.includes("华语") && <SongsItemV2 title="华语" songsInfos={chinese} />}
            {filterFields.includes("古风") && <SongsItemV2 title="古风" songsInfos={ancient} />}
            {filterFields.includes("欧美") && <SongsItemV2 title="欧美" songsInfos={EA} />}
            {filterFields.includes("流行") && <SongsItemV2 title="流行" songsInfos={popular} />}
        </SongsWrapper>
    )
}

export default memo(Songs)
