import React from "react"
import { Navigate, RouteObject } from "react-router-dom"

// -- 路由懒加载（pageCount: 7）
const Discover = React.lazy(() => import("@/views/discover"))
const Songs = React.lazy(() => import("@/views/songs"))
const SongsDetail = React.lazy(() => import("@/views/songs-detail"))
const PlayerDetail = React.lazy(() => import("@/views/player-detail"))
const Video = React.lazy(() => import("@/views/video"))
const VideoDetail = React.lazy(() => import("@/views/video-detail"))
const SettingTheme = React.lazy(() => import("@/views/setting-theme"))

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/discover" />
    },
    {
        path: "/discover",
        element: <Discover />
    },
    {
        path: "/songs",
        element: <Songs />
    },
    {
        path: "/songs-detail",
        element: <SongsDetail />
    },
    {
        path: "/player-detail",
        element: <PlayerDetail />
    },
    {
        path: "/video",
        element: <Video />
    },
    {
        path: "/video-detail",
        element: <VideoDetail />
    },
    {
        path: "/theme",
        element: <SettingTheme />
    }
]

export default routes
