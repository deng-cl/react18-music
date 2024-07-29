import lodash from "lodash"
import React, { useEffect, useRef, useState } from "react"

const usePageScrollInfo = (elementRef: React.RefObject<HTMLDivElement>) => { // -- 页面滚动距离监听
    const [scrollY, setScrollY] = useState(0)
    const [scrollable, setScrollable] = useState(0)
    const removeListenerRef = useRef<((() => void) | null)>(null)

    useEffect(() => {
        if (!elementRef?.current) return

        const pageScrollHandleFun = lodash.throttle((e: any) => {
            const target = e?.target as HTMLDivElement
            const scrollableSize = target.scrollHeight - target.clientHeight
            const currentScrollPostion = target.scrollTop
            setScrollY(currentScrollPostion)

            setScrollable(scrollableSize)
        }, 80) // -- prev: 500

        elementRef.current.addEventListener("scroll", pageScrollHandleFun)

        removeListenerRef.current = () => {
            elementRef.current!.removeEventListener("scroll", pageScrollHandleFun)
        }

        return removeListenerRef.current
    }, [elementRef])

    return { scrollY, scrollable, removeListenerRef }
}

export default usePageScrollInfo

