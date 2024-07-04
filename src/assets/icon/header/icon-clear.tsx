import { memo } from "react"
import type { ReactNode, FC } from "react"
import { ISvgProps } from "../type"


interface IProps extends ISvgProps {
    fill?: string
}

const IconClear: FC<IProps> = (props: IProps) => {
    const { width = 16, height = 16, fill } = props
    return (
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5100" width={width} height={height} >
            <path d="M576 512l192 192-64 64-192-192L320 768 256 704l192-192L256 320 320 256l192 192L704 256 768 320z" p-id="5101" fill={fill}></path>
        </svg>
    )
}

export default memo(IconClear)
