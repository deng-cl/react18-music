import type { INavItem } from "./c-cpns/section" // -- item type

// -- home comp
import IconHome from "@/assets/icon/nav/icon-home"
import IconMusic from "@/assets/icon/nav/icon-music"
import IconSongs from "@/assets/icon/nav/icon-songs"
import IconMV from "@/assets/icon/nav/icon-mv"

// -- setting comp
import IconSetting from "@/assets/icon/nav/icon-setting"
import IconTheme from "@/assets/icon/nav/icon-theme"

export const HomeNavItems: INavItem[] = [ // -- home item config
    {
        icon: <IconHome />,
        name: "Home",
        routePath: "none",
        isTitle: true
    },
    {
        icon: <IconMusic />,
        name: "Music",
        routePath: "/discover"
    },
    {
        icon: <IconSongs />,
        name: "Songs",
        routePath: "/songs"
    },
    {
        icon: <IconMV />,
        name: "MV",
        routePath: "/video"
    }
]

export const SettingNavItems: INavItem[] = [// -- setting item config
    {
        icon: <IconSetting />,
        name: "Settings",
        routePath: "none",
        isTitle: true
    },
    {
        icon: <IconTheme />,
        name: "Theme",
        routePath: "/theme"
    }
]
