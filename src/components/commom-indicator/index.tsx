import Indicator from "@/base-ui/indicator"
import classNames from "classnames"
import { memo } from "react"
import type { ReactNode, FC } from "react"
import { IndicatorWrapper } from "./style"

interface IProps {
    children?: ReactNode,
    dogCount: number
    curIndex: number
}

const CommomIndicator: FC<IProps> = (props: IProps) => {
    const { dogCount, curIndex } = props
    return (
        <IndicatorWrapper className="indicator">
            <Indicator selectedIndex={curIndex} >
                {
                    Array(dogCount).fill(1).map((item: any, index: number) => (
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
        </IndicatorWrapper>
    )
}

export default memo(CommomIndicator)
