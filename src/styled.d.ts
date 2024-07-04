import 'styled-components'; // import original module declarations

declare module 'styled-components' { // and extend them!
    export interface DefaultTheme {
        color: {
            primary: string,
            secondary: string,
            hover_bg: string,
            active: string,
            button_bg: string
        },
        textColor: {
            primary: string,
            secondary: string
        },
        textSize: {
            larger: string,
            normal: string,
            small: string
        },
        mixin: {}
    }
}

