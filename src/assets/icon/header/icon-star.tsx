import React, { FC, memo } from 'react'
import type { ISvgProps } from '../type'

const IconStar: FC<ISvgProps> = memo((props: ISvgProps) => {
    const { width = 16, height = 16 } = props
    return (
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1832" width={width} height={height}>
            <path d="M540.16 47.232l4.672 2.56a64 64 0 0 1 24.64 26.752l106.208 216.704a32 32 0 0 0 24.224 17.6l238.912 34.048a64 64 0 0 1 35.52 109.312l-173.28 167.968a32 32 0 0 0-9.28 28.48l41.472 237.76a64 64 0 0 1-92.992 67.52l-213.28-112.864a32 32 0 0 0-29.952 0l-213.28 112.896a64 64 0 0 1-92.992-67.584l41.44-237.76a32 32 0 0 0-9.248-28.448l-173.28-167.968a64 64 0 0 1 35.52-109.312l238.912-34.048a32 32 0 0 0 24.224-17.6l106.24-216.704a64 64 0 0 1 81.024-31.328l4.576 2.016z" p-id="1833"></path>
        </svg>
    )
})

export default IconStar
