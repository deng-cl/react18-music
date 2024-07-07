import { memo } from "react"
import type { ReactNode, FC } from "react"
import { PaganationWrapper } from "./style"
import { Pagination } from "antd"

interface IProps {
    defaultCurrent?: number
    defaultPageSize?: number
    showSizeChanger?: boolean
    total?: number,
    current?: number | "NotFurrent"
    onChange?: (pageCode: number) => any
}

const CommomPaganation: FC<IProps> = (props: IProps) => {
    const {
        defaultCurrent = 1,
        defaultPageSize = 10,
        total = 0,
        showSizeChanger = false,
        current = "NotFurrent",
        onChange
    } = props

    return (
        <PaganationWrapper>
            {
                current === "NotFurrent" ? (
                    <Pagination
                        defaultCurrent={defaultCurrent}
                        defaultPageSize={defaultPageSize}
                        total={total}
                        showSizeChanger={showSizeChanger}
                        onChange={onChange}
                    />
                ) : (
                    <Pagination
                        defaultCurrent={defaultCurrent}
                        defaultPageSize={defaultPageSize}
                        total={total}
                        current={current}
                        showSizeChanger={showSizeChanger}
                        onChange={onChange}
                    />
                )
            }

        </PaganationWrapper>
    )
}

export default memo(CommomPaganation)
