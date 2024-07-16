import type { TSectionListData } from "./c-cpns/section-list" // -- item type

// -- home comp
import IconHome from "@/assets/icon/nav/icon-home"
import IconMusic from "@/assets/icon/nav/icon-music"
import IconSongs from "@/assets/icon/nav/icon-songs"
import IconMV from "@/assets/icon/nav/icon-mv"
import IconRanking from "@/assets/icon/nav/icon-ranking"

// -- setting comp
import IconSetting from "@/assets/icon/nav/icon-setting"
import IconTheme from "@/assets/icon/nav/icon-theme"
import IconVersion from "@/assets/icon/nav/icon-version"
import IconAppInfo from "@/assets/icon/nav/icon-app-info"
import IconSettingBase from "@/assets/icon/nav/icon-setting-base"

const NAV_LIST_DATA: TSectionListData = [
    [ // -- home item config
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
            icon: <IconRanking />,
            name: "Ranking",
            routePath: "/ranking"
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
    ],

    [ // -- setting item config
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
        },
        {
            icon: <IconSettingBase />,
            name: "Base",
            routePath: "/base"
        },
    ],

    [ // -- app info item config
        {
            icon: <IconAppInfo />,
            name: "App Info",
            routePath: "none",
            isTitle: true
        },
        {
            icon: <IconVersion />,
            name: "Version",
            routePath: "/version"
        }
    ]
]

export default NAV_LIST_DATA
