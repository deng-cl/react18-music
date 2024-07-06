import { configureStore } from "@reduxjs/toolkit";

import discover from "./modules/discover";
import main from "./modules/main";
import songs from "./modules/songs";


const store = configureStore({
    reducer: {
        discover,
        main,
        songs
    }
})

export default store
