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
            icon: <IconSongs />,
            name: "Songs",
            routePath: "/songs"
        },
        {
            icon: <IconRanking />,
            name: "Ranking",
            routePath: "/ranking"
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
        }
    ]
]

export default NAV_LIST_DATA
