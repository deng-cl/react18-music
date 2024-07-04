import React, { FC, memo } from 'react'
import type { ISvgProps } from '../type'

const IconStepbackward: FC<ISvgProps> = memo((props: ISvgProps) => {
    const { width = 16, height = 16 } = props
    return (
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24752" width={width} height={height}>
            <path d="M759.008 76L328 432V132q0-15.008-10.496-25.504T292 96q-15.008 0-25.504 10.496T256 132v760q0 15.008 10.496 25.504t25.504 10.496q15.008 0 25.504-10.496t10.496-25.504v-300.992l431.008 356.992q20.992 18.016 46.016 7.008t24.992-39.008V108q0-28-24.992-39.008t-46.016 7.008z" p-id="24753"></path>
        </svg>
    )
})

export default IconStepbackward
