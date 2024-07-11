import { configureStore } from "@reduxjs/toolkit";

import discover from "./modules/discover";
import main from "./modules/main";
import songs from "./modules/songs";
import video from "./modules/video";

// player --- ↓
import player from "../views/player/store/module/player"
import audioControl from "@/views/player/store/module/audio-control";
import audioOperator from "@/views/player/store/module/audio-operator";


const store = configureStore({
    reducer: {
        discover,
        main,
        songs,
        video,
        // player --- ↓
        player,
        audioControl,
        audioOperator
    }
})

export default store
