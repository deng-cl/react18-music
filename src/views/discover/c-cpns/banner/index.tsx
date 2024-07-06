import { memo, useEffect, useRef, useState } from "react"
import type { ReactNode, FC } from "react"
import analyze from 'rgbaster' // -- 获取图片颜色

import { BannerWrapper } from "./style"
import { appShallowEqual, useAppSelector } from "@/store/app-react-redux"
import IconArrowLeft from "@/assets/icon/header/icon-arrow-left"
import IconArrowRight from "@/assets/icon/header/icon-arrow-right"
import Indicator from "@/base-ui/indicator"
import classNames from "classnames"
import CommomIndicator from "@/components/commom-indicator"


interface IProps {
    children?: ReactNode
}

const Banner: FC<IProps> = (props: IProps) => {
    const { banner } = useAppSelector(state => ({ // -- 获取 banner 数据
        banner: state.discover.banner
    }), appShallowEqual)

    const [curIndex, setCurIndex] = useState(0) // -- 当前展示的图片索引
    const [isControlling, setSsControlling] = useState(false) // -- 当前是否在使用控件切换轮播 --> 用于当鼠标在控件上时停止自动轮播

    const changeCurIndex = (isNext = true) => { // -- 修改 curIndex 进行切换轮播函数
        let newIndex = isNext ? curIndex + 1 : curIndex - 1
        if (newIndex < 0) newIndex = banner.length - 1
        if (newIndex > banner.length - 1) newIndex = 0
        setCurIndex(newIndex)
    }

    // -- 定时轮播处逻辑 ↓
    let intervalId: any = null // -- 记录定时器 ID --> 用于移除定时器
    useEffect(() => { // -- autoplay
        if (isControlling) intervalId && clearInterval(intervalId)  // -- 当前鼠标在控件中时停止自动轮播
        else intervalId = setInterval(changeCurIndex, 2000) // -- 定时轮播
        return () => {
            intervalId && clearInterval(intervalId) // -- 移除定时器
        }
    }, [curIndex, isControlling, banner])

    // -- 获取当前轮播图片的前三个主要颜色 --> 动态设置 .banners 的渐变背景 ↓ -- > 展示废弃（使用原图的模糊背景）
    // const boxRef = useRef<HTMLElement>()
    // useEffect(() => {
    //     (async function () {
    //         const imageUrl = banner[curIndex]?.imageUrl
    //         if (imageUrl) {
    //             const result = await analyze(imageUrl, { scale: 0.1 })
    //             const [c1, c2, c3] = [result[0], result[Math.floor(result.length / 2)], result.at(-1)]
    //             if (boxRef.current) boxRef.current.style.background = `linear-gradient(0.3turn,${c1.color}, ${c2.color}, ${c3.color})`; // -- 设置容器背景颜色
    //         }
    //     })()
    // }, [curIndex, banner])

    // -- 替换 ↑ 使用模糊背景图
    let bgImageUrl = banner[curIndex]?.imageUrl
    if (bgImageUrl) {
        bgImageUrl = bgImageUrl + "?imageView&blur=40x20" // -- 向服务器请求对应的模糊图片
    }

    return (
        // <BannerWrapper ref={boxRef as any}>
        // background: `url('${bgImageUrl}') center center / 6000px
        <BannerWrapper style={{ background: `url('${bgImageUrl}') center center / 6000px` }}>
            {/* banner */}
            <div className="banners">
                {
                    banner.map((item, index) => (
                        <div className="item" key={item.imageUrl}
                            style={{ opacity: index === curIndex ? 1 : 0 }}
                        >
                            <img src={item.imageUrl} alt="" />
                        </div>
                    ))
                }
            </div>
            {/* control */}
            <div className="control">
                <div className="left"
                    onClick={e => changeCurIndex(false)}
                    onMouseEnter={e => setSsControlling(true)}
                    onMouseLeave={e => setSsControlling(false)}
                >
                    <IconArrowLeft width={40} height={40} />
                </div>
                <div className="right"
                    onClick={e => changeCurIndex(true)}
                    onMouseEnter={e => setSsControlling(true)}
                    onMouseLeave={e => setSsControlling(false)}
                >
                    <IconArrowRight width={40} height={40} />
                </div>
            </div>

            {/* indicator: 弃用 --> 使用 .commom-indicator 进行替换（将对应 indicator 逻辑封装成一个组件） */}
            {/* <div className="indicator">
                <Indicator selectedIndex={curIndex} >
                    {
                        banner.map((item, index) => (
                            <div className="item" key={index}>
                                <div className={
                                    classNames("dot", {
                                        active: index === curIndex,
                                        middle: index === curIndex + 1 || index === curIndex - 1
                                    })
                                }
                                ></div>
                            </div>
                        ))
                    }
                </Indicator>
            </div> */}

            <div className="commom-indicator">
                <CommomIndicator dogCount={banner.length} curIndex={curIndex} />
            </div>
        </BannerWrapper>
    )
}

export default memo(Banner)
