import { configureStore } from "@reduxjs/toolkit";

import discover from "./modules/discover";
import main from "./modules/main";
import songs from "./modules/songs";
import video from "./modules/video";
import player from "../views/player/store"


const store = configureStore({
    reducer: {
        discover,
        main,
        songs,
        video,
        player
    }
})

export default store
