import { memo } from "react"
import type { ReactNode, FC } from "react"
import { SectionWrapper } from "./style"
import classNames from "classnames"
import { IRoutesPath } from "@/router" // -- 路由路径类型
import { useNavigate } from "react-router-dom"

export interface INavItem {
    icon: ReactNode,
    name: string,
    routePath: IRoutesPath,
    isTitle?: boolean
}

interface IProps {
    children?: ReactNode
    sectionData: INavItem[]
}

const NavSection: FC<IProps> = (props) => {

    const navigate = useNavigate()
    function toNewPage(path: IRoutesPath) {
        if (path === 'none') return
        navigate(path)
    }

    return (
        <SectionWrapper>
            {
                props.sectionData.map((item, index) => (
                    <div
                        className={classNames("icon", { title: item.isTitle, route: item.routePath !== "none" })}
                        onClick={e => toNewPage(item.routePath)}
                        key={index}
                    >
                        {item.icon}
                        <span className="name">{item.name}</span>
                    </div>
                ))
            }
        </SectionWrapper>
    )
}

export default memo(NavSection)
