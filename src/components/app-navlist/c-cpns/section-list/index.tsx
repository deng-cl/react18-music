import { memo, useEffect } from "react"
import type { ReactNode, FC, SetStateAction, Dispatch } from "react"
import { SectionWrapper } from "./style"
import classNames from "classnames"
import { IRoutesPath } from "@/router" // -- 路由路径类型
import { useLocation, useNavigate } from "react-router-dom"

interface INavItem {
    icon: ReactNode,
    name: string,
    routePath: IRoutesPath,
    isTitle?: boolean
}

export type TSectionListData = INavItem[][] // -- 该组件需要接收的数据参数类型

interface IProps {
    children?: ReactNode
    NavListData: TSectionListData
    set_is_show_nav: Dispatch<SetStateAction<boolean>>
}

const NavSectionList: FC<IProps> = (props) => {

    const location = useLocation()

    // -- 点击 nav item --> 进行对应路由的跳转
    const navigate = useNavigate()
    function toNewPage(path: IRoutesPath) {
        if (path === 'none') return
        props.set_is_show_nav(false)
        navigate(path)
    }

    return (
        <SectionWrapper>
            {
                props.NavListData.map((sectionData, index) => (
                    <div className="section" key={index}>
                        {
                            sectionData.map((item, index) => (
                                <div
                                    className={
                                        classNames("icon",
                                            {
                                                title: item.isTitle,
                                                route: item.routePath !== "none",
                                                active: location.pathname.includes(item.routePath.split("/")[1])
                                            }
                                        )
                                    }
                                    onClick={e => toNewPage(item.routePath)}
                                    key={index}
                                >
                                    {item.icon}
                                    <span className="name">{item.name}</span>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </SectionWrapper>
    )
}

export default memo(NavSectionList)
