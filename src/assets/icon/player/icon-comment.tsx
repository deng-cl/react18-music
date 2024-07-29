import React, { FC, memo } from 'react'
import type { ISvgProps } from '../type'

const IconComment: FC<ISvgProps> = memo((props: ISvgProps) => {
    const { width = 16, height = 16 } = props
    return (
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1994" width={width} height={height}>
            <path d="M928 96a96 96 0 0 1 96 96v576a96 96 0 0 1-96 96h-295.68l-111.744 137.696L398.144 864H96a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h832z m-176 416h-352a48 48 0 0 0 0 96h352a48 48 0 0 0 0-96z m-512 0a48 48 0 1 0 0 96 48 48 0 0 0 0-96z m0-224a48 48 0 1 0 0 96 48 48 0 0 0 0-96z m512 0h-352a48 48 0 0 0 0 96h352a48 48 0 0 0 0-96z" p-id="1995"></path>
        </svg>
    )
})

export default IconComment


