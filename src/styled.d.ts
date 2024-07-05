import 'styled-components'; // import original module declarations
import type { CustomTheme } from './assets/theme';

declare module 'styled-components' { // and extend them!
    export interface DefaultTheme extends CustomTheme { } // -- 给其 theme 注入提供类型支持
}

