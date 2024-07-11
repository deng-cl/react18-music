import { configureStore } from "@reduxjs/toolkit";

import discover from "./modules/discover";
import main from "./modules/main";
import songs from "./modules/songs";
import video from "./modules/video";
// import player from "../views/player/store"
import player from "../views/player/store/module/player"
import playBar from "@/views/player/store/module/play-bar";


const store = configureStore({
    reducer: {
        discover,
        main,
        songs,
        video,
        // player
        player,
        playBar

    }
})

export default store
