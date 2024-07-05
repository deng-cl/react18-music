import { memo, useEffect } from "react"
import type { ReactNode, FC } from "react"
import { DiscoverWrapper } from "./style"
import { fetchDiscoverPageDataAction } from "@/store/modules/discover"
import { useDispatch } from "react-redux"
import { UnknownAction } from "@reduxjs/toolkit"
import Banner from "./c-cpns/banner"

interface IProps {
    children?: ReactNode
}

const Discover: FC<IProps> = () => {
    const dispatch = useDispatch()
    useEffect(() => { // -- comp mounted --> fetch data
        dispatch(fetchDiscoverPageDataAction() as unknown as UnknownAction)
    }, [])

    return (
        <DiscoverWrapper>
            <Banner />
        </DiscoverWrapper>
    )
}

export default memo(Discover)
