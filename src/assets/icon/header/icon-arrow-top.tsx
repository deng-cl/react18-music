import React, { FC, memo } from 'react'
import type { ISvgProps } from '../type'

const IconArrowTop: FC<ISvgProps> = memo((props: ISvgProps) => {
    const { width = 16, height = 16 } = props
    return (
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4434" width={width} height={height}>
            <path d="M51.4 767.8c-19.7-19.7-19.7-51.7 0-71.4l428.2-428.2c19.7-19.7 51.7-19.7 71.4 0 19.7 19.7 19.7 51.7 0 71.4L122.8 767.8c-19.7 19.7-51.7 19.7-71.4 0z" p-id="4435"></path><path d="M479.6 268.2c19.7-19.7 51.7-19.7 71.4 0l428.2 428.2c19.7 19.7 19.7 51.7 0 71.4-19.7 19.7-51.7 19.7-71.4 0L479.6 339.6c-19.7-19.8-19.7-51.7 0-71.4z" p-id="4436"></path>
        </svg>
    )
})

export default IconArrowTop


