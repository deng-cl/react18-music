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


// -- 配置 player 库的类型声明
// import Player from 'xgplayer/dist/core_player';
// import play from 'xgplayer/dist/controls/play';
// import fullscreen from 'xgplayer/dist/controls/fullscreen';
// import progress from 'xgplayer/dist/controls/progress';
// import volume from 'xgplayer/dist/controls/volume';
// import pip from 'xgplayer/dist/controls/pip';
// import flex from 'xgplayer/dist/controls/flex';

declare module 'xgplayer/dist/core_player' {
    export default Player;
}

declare module 'xgplayer/dist/controls/play' {
    export default play;
}

declare module 'xgplayer/dist/controls/fullscreen' {
    export default fullscreen;
}

declare module 'xgplayer/dist/controls/progress' {
    export default progress;
}

declare module 'xgplayer/dist/controls/volume' {
    export default volume;
}

declare module 'xgplayer/dist/controls/pip' {
    export default pip;
}

declare module 'xgplayer/dist/controls/flex' {
    export default flex;
}


declare module "mui-player" {
    export default MuiPlayer
}
