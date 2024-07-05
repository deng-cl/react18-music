import { configureStore } from "@reduxjs/toolkit";

import discover from "./modules/discover";
import main from "./modules/main";

const store = configureStore({
    reducer: {
        discover,
        main
    }
})

export default store
