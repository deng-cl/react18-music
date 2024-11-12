import { memo } from "react"
import type { ReactNode, FC } from "react"
import { VersionWrapper } from "./style"
import VersionItem from "./c-cpns/version-item"

interface IProps {
    children?: ReactNode
}

export interface IVersionItem {
    vNumber: string
    desc: string
    date: string
}

const HISTORY_VERSION_INFO: IVersionItem[] = [ // -- hstory version info list
    {
        vNumber: "1.0.0",
        desc: "coderkxh-music 项目上线",
        date: "2024/7/15"
    },
    {
        vNumber: "1.0.1",
        desc: "Add historical version infomation display page",
        date: "2024/7/15"
    },
    {
        vNumber: "1.0.2",
        desc: "Added the basic information Settings page and added the Clear cache function to it",
        date: "2024/7/16"
    },
    {
        vNumber: "1.0.5",
        desc: "Performances optimization: Optimize the performance of page caching and data display",
        date: "2024/7/16"
    },
    {
        vNumber: "1.0.6",
        desc: "Fix: 修复 MV 切换评论排序数据获取不到问题",
        date: "2024/7/16"
    },
    {
        vNumber: "1.0.7",
        desc: "Refactor: 重构首页推荐歌曲与排行榜中的歌曲数据展示，便于后面进行进行移动端的适配",
        date: "2024/7/29"
    },
    {
        vNumber: "1.1.7",
        desc: "Feat: 移动端适配测试",
        date: "2024/7/30"
    },
    {
        vNumber: "1.1.8",
        desc: "Fix: 处理部分适配小 bug 等问题",
        date: "2024/7/30"
    },
    {
        vNumber: "1.1.9",
        desc: "Style: 优化移动端样式的适配 / 数据加载中的反馈",
        date: "2024/7/30"
    },
    {
        vNumber: "1.2.2",
        desc: "Feat: 移动端适配调整，调整部分安卓浏览器播放适配顶层问题...",
        date: "2024/8/1"
    },
    {
        vNumber: "1.2.3",
        desc: "Refactor / Performances: 性能优化 - 通过虚拟列表来展示歌单与排行榜的歌曲列表，减少当列表滚动时的渲染卡顿，通过 useCallback 优化部分组件",
        date: "2024/11/12"
    }
].reverse()

const Version: FC<IProps> = () => {
    return (
        <VersionWrapper>
            {
                HISTORY_VERSION_INFO.map(item => (
                    <div className="item" key={item.vNumber}>
                        <VersionItem itemData={item} />
                    </div>
                ))
            }
        </VersionWrapper>
    )
}

export default memo(Version)
