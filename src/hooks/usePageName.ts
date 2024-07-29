import { routepataMapPagename } from "@/router";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function usePageName(): string { // -- get current page name --> 根据路由信息获取当前页面名称
    const [pagename, setPagename] = useState("")
    const location = useLocation()
    useEffect(() => {
        const pathname = location.pathname as string
        setPagename((routepataMapPagename as any)["/" + pathname.split("/")[1]])
    }, [location, pagename])

    return pagename
}

