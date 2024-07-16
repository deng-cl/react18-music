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
