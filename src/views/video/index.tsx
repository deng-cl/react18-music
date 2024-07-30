import { memo, useEffect } from "react"
import type { ReactNode, FC } from "react"
import { VideoWrapper } from "./style"
import VideoItemV1 from "./c-cpns/video-item-v1"
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store/app-react-redux"
import { fetchVideoPageDataAction } from "@/store/modules/video"
import KeepAlive from "react-activation"

interface IProps {
    children?: ReactNode
}

const Video: FC<IProps> = () => {
    const { MVTop } = useAppSelector(state => ({
        MVTop: state.video.MVTop
    }), appShallowEqual)

    // -- 数据请求
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchVideoPageDataAction())
    }, [])

    return (
        <VideoWrapper>
            <div className="list">
                {
                    MVTop.map((item: any, index: number) => (
                        <div className="item" key={item.id}>
                            <KeepAlive cacheKey={"video:item" + index} name='video:item'>
                                <VideoItemV1 MVData={item} />
                            </KeepAlive>
                        </div>
                    ))
                }
            </div>
        </VideoWrapper>
    )
}

export default memo(Video)

