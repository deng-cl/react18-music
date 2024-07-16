import { memo } from "react"
import type { ReactNode, FC } from "react"
import { BaseWrapper } from "./style"
import { useAliveController } from "react-activation"
import { message } from "antd"

interface IProps {
    children?: ReactNode
}

const SettingBase: FC<IProps> = () => {

    const { clear } = useAliveController() // -- 清除缓存（组件缓存...）

    const clearCache = () => { // -- 清除缓存
        clear().then(res => {
            message.success({
                key: "clearCache",
                content: "缓存已清除"
            })
        })
    }

    return (
        <BaseWrapper>
            <div className="item clear-cache">
                <div className="name">历史缓存</div>
                <div className="button" onClick={clearCache}>清除缓存</div>
            </div>
        </BaseWrapper>
    )
}

export default memo(SettingBase)
