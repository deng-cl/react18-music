import { memo, useRef, useState } from "react"
import type { ReactNode, FC } from "react"
import { HeaderWrapper } from "./style"
import IconArrowLeft from "@/assets/icon/header/icon-arrow-left"
import IconAvatar from "@/assets/icon/header/icon-avatar"
import IconSharealt from "@/assets/icon/header/icon-sharealt"
import IconSearch from "@/assets/icon/header/icon-search"
import IconClear from "@/assets/icon/header/icon-clear"
import { message } from "antd"

interface IProps {
    children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
    const [searchValue, setSearchValue] = useState("")

    // -- ↓ event function
    function changeHandle(e: React.ChangeEvent<HTMLInputElement>) { // -- 处理 input 数据的双向绑定
        setSearchValue(e.target.value)
    }

    let isComposition = useRef(true)
    function compositionHandle(e: React.CompositionEvent<HTMLInputElement>) { // -- 用于解决在中文输入的情况按下 Enter 时，不执行对应的 "搜索部分" 逻辑
        if (e.type === "compositionend") {
            isComposition.current = true
        } else {
            isComposition.current = false
        }
    }

    function searchInputDownEnterHandle(e: React.KeyboardEvent<HTMLInputElement>) { // -- 处理搜索逻辑
        if (e.code === "Enter") {
            if (!searchValue) alert("搜索内容不能为空！")
            if (isComposition.current && searchValue !== "") { // -- ↓ 搜索逻辑
                console.log("Down Enter --> To Search");
            }
        }
    }

    return (
        <HeaderWrapper>
            <div className="left">
                <div className="back" onClick={e => window.history.back()}>
                    <IconArrowLeft />
                </div>

                <div className="btn">
                    <span>Repository</span>
                    <IconSharealt />
                </div>
                <div className="btn">
                    <span>About me</span>
                    <IconSharealt />
                </div>
            </div>

            <div className="right">
                <div className="search" onClick={e => {
                    message.info({
                        key: "search",
                        content: "当前 coderkxh-music v1.0.6 版本，暂未去实现搜索功能，后续会实现，敬请期待...",
                        duration: 5
                    })
                }}>
                    <IconSearch />
                    <input type="text" placeholder="音乐/视频/电台/用户"
                        value={searchValue}
                        onKeyDown={searchInputDownEnterHandle}
                        onCompositionStart={compositionHandle}
                        onCompositionEnd={compositionHandle}
                        onChange={changeHandle}
                    />
                    {
                        searchValue && (
                            <div className="clear" onClick={e => setSearchValue("")}>
                                <IconClear width={20} height={20} fill="#d58484" />
                            </div>
                        )
                    }
                </div>
                <div className="info">
                    <IconAvatar width={32} height={32} />
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default memo(AppHeader)
