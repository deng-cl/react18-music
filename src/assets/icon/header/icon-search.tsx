import { memo } from "react"
import type { FC } from "react"
import { ISvgProps } from "../type"

const IconSearch: FC<ISvgProps> = (props: ISvgProps) => {
    const { width = 16, height = 16 } = props
    return (
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15303" width={width} height={height}>
            <path d="M992.262 871.396 749.71 665.102c-25.074-22.566-51.89-32.926-73.552-31.926C733.414 566.108 768 479.098 768 384 768 171.922 596.078 0 384 0 171.924 0 0 171.922 0 384c0 212.078 171.922 384 384 384 95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356S1031.508 906.718 992.262 871.396zM384 640c-141.384 0-256-114.616-256-256S242.616 128 384 128s256 114.616 256 256S525.386 640 384 640z" p-id="15304"></path>
        </svg>
    )
}

export default memo(IconSearch)
