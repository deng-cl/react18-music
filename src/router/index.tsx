import React from "react"
import KeepAlive from "react-activation"
import { Navigate, RouteObject } from "react-router-dom"

// -- 路由懒加载（pageCount: 7）
const Discover = React.lazy(() => import("@/views/discover"))
const Songs = React.lazy(() => import("@/views/songs"))
const SongsDetail = React.lazy(() => import("@/views/songs-detail"))
const SongsEntire = React.lazy(() => import("@/views/songs-entire"))
const Video = React.lazy(() => import("@/views/video"))
const VideoDetail = React.lazy(() => import("@/views/video-detail"))
const SettingTheme = React.lazy(() => import("@/views/setting-theme"))

const ShowIconTest = React.lazy(() => import("@/views/show-icon-test"))

const Ranking = React.lazy(() => import("@/views/ranking"))

const Version = React.lazy(() => import("@/views/version"))

const SettingBase = React.lazy(() => import("@/views/setting-base"))

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/discover" />
    },
    {
        path: "/discover",
        element: (

            <Discover />
        ),
    },
    {
        path: "/songs",
        element: <Songs />
    },
    {
        path: "/songs-detail/:id",
        element: <SongsDetail />
    },
    {
        path: "/songs-entire/:cat",
        element: <SongsEntire />
    },
    {
        path: "/video",
        element: <Video />
    },
    {
        path: "/video-detail/:id",
        element: <VideoDetail />
    },
    {
        path: "/theme",
        element: <SettingTheme />
    },
    {
        path: "/base",
        element: <SettingBase />
    },
    {
        path: "/ranking",
        element: <Ranking />
    },
    {
        path: "/version",
        element: <Version />
    },
    { // -- test --> 主要用于展示项目中的 icon 方便选择使用
        path: "/icon",
        element: <ShowIconTest />
    }
]

export default routes

export type IRoutesPath = "/" | "/discover" | "/songs" | "/songs-detail" | "/player-detail" | "/video" | "/video-detail" | "/theme" | "/base" | "/ranking" | "/version" | "none"
export enum routepataMapPagename {
    "/discover" = "Home",
    "/songs" = "Songs",
    "/songs-detail" = "SongDetail",
    "/player-detail" = "PlayerDetail",
    "/video" = "Video/MV",
    "/video-detail" = "MVDetail",
    "/theme" = "Theme",
    "/base" = "Base",
    "/ranking" = "Ranking",
    "/version" = "History Version",
}
