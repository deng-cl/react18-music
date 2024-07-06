import React, { FC, ReactNode, memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/icon/header/icon-arrow-left'
import IconArrowRight from '@/assets/icon/header/icon-arrow-right'

interface IProps {
    children: ReactNode
}

const ScrollView: FC<IProps> = (props: IProps) => {
    const [showRight, setShowRight] = useState(false)
    const [showLeft, setShowLeft] = useState(false)

    const contentRef = useRef<HTMLElement>() // -- 获取 content 容器元素
    const posIndex = useRef(0) // 存储当前可显示的首位 tab 索引
    const totalDistance = useRef(0) // 存储 tabs 可滚动大小

    // effect
    useEffect(() => {
        if (!contentRef.current) return
        const contentScrollWidth = contentRef.current.scrollWidth // -- 获取 content 可滚动区域
        const contentClientWidth = contentRef.current.clientWidth // -- 获取 content 展示宽度
        totalDistance.current = contentScrollWidth - contentClientWidth // -- 获取不可见的可滚动部分宽度（大于 0 --> 显示对应 "向右按钮"）
        if (totalDistance.current > 0) setShowRight(true) // -- 可滚动宽度大于 0 --> 显示向右按钮
    }, [props.children])

    // -- 事件监听函数
    function controlClickHandle(isRight: boolean) { // -- 监听点击向左/向右点击事件
        if (!contentRef.current) return

        const newIndex = isRight ? posIndex.current + 1 : posIndex.current - 1 // -- 获取将要移动的元素 index 索引（根据 type 判断是向左还是向右移动）

        const newEl = contentRef.current.children[newIndex] as HTMLElement// -- 获取对应的元素
        const newOffsetLeft = newEl?.offsetLeft // -- 获取 ↑ 对应距离左边父元素可视的距离

        contentRef.current.style.transform = `translateX(-${newOffsetLeft}px)` // -- 移动 ↑ 对应距离

        posIndex.current = newIndex // -- 更新当前显示首位 tab 索引

        if (totalDistance.current < newOffsetLeft) setShowRight(false) // -- 判断是否可继续向右滚动
        else setShowRight(true)

        setShowLeft(newOffsetLeft > 0)
    }

    return (
        <ViewWrapper>
            {showLeft && (
                <button onClick={() => controlClickHandle(false)} className="left">
                    <IconArrowLeft width={30} height={30} />
                </button>
            )}

            {showRight && (
                <button onClick={() => controlClickHandle(true)} className="right">
                    <IconArrowRight width={30} height={30} />
                </button>
            )}

            <div className="scroll">
                <div className="sroll-content" ref={contentRef as any}>
                    {props.children}
                </div>
            </div>
        </ViewWrapper>
    )
}

export default ScrollView
