import lodash from "lodash"
import { MutableRefObject, startTransition, useContext, useEffect, useState } from "react"
import usePageScrollInfo from "./usePageScrollInfo"
import { AppContext } from "@/App"

export const INITAL_DISPLAY_SONG_COUNT = 12

export default function useIsDistance(songLen: number) {
    const [offset, setOffset] = useState(INITAL_DISPLAY_SONG_COUNT)
    const [loading, setLoading] = useState(false)

    const { pageRef } = useContext(AppContext) as any
    const { scrollY, scrollable, removeListenerRef } = usePageScrollInfo(pageRef)

    useEffect(lodash.throttle(() => {
        if (songLen === 0) return

        if (scrollable === 0) setOffset(offset + INITAL_DISPLAY_SONG_COUNT) // -- 初始进入: 当屏幕高度高于显示的数据时，直接请求更多数据

        if (offset >= songLen) {
            if (removeListenerRef.current) removeListenerRef.current() // -- 取消 scroll 的监听 --> 性能优化
            return
        }

        const distancedSize = scrollable - scrollY // -- 计算距离底部的距离
        setLoading(true)
        if (distancedSize < 50) {
            setOffset(offset + INITAL_DISPLAY_SONG_COUNT)

            startTransition(() => { // -- 降低更新优先级 --> 等待 DOM 更新完后，再设置该 loading 为 false --> 即: DOM更新完后，再取消显示 loading
                setLoading(false)
            })
        }
    }, 400), [scrollY, scrollable, songLen])

    return {
        offset,
        loading
    }
}


