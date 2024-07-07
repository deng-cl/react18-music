import { memo } from "react"
import type { ReactNode, FC } from "react"
import { ISvgProps } from "../type"

const IconVideo: FC<ISvgProps> = memo((props: ISvgProps) => {
    const { width = 16, height = 16 } = props
    return (
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9625" width={width} height={height}>
            <path d="M817.33 98.22H208.67C147.58 98.22 98 155.43 98 225.92v574.62c0 70.49 49.58 127.69 110.67 127.69h608.67c61.09 0 110.67-57.21 110.67-127.69V225.92c-0.01-70.49-49.59-127.7-110.68-127.7zM656.02 532.3L396.7 665.68c-4.15 2.1-8.77 3.17-13.38 3.17-4.41 0-8.82-0.94-12.76-2.9-8.14-3.92-13.18-11.32-13.18-19.35V379.84c0-8.02 5.03-15.38 13.18-19.35 8.09-3.97 18.16-3.83 26.14 0.27l259.32 133.38c7.83 4.01 12.61 11.28 12.61 19.08-0.01 7.85-4.78 15.07-12.61 19.08z" p-id="9627"></path>
        </svg>
    )
})

export default IconVideo
