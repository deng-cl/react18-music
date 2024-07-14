/// <reference  types="react-scripts" />

declare module 'react-transition-group' {
    export function SwitchTransition(props: any): any
    export function CSSTransition(props: any): any
}


declare module 'rgbaster' {
    export default function analyze(imageUrl: string, options?: any): Promise<any>
}

declare module 'lodash' {
    class Lodash {
        throttle(func: any | void, timeout: number)
        debounce(func: any | void, timeout: number)
    }
    export default new Lodash()
}
