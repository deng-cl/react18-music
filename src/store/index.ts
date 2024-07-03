import { configureStore } from "@reduxjs/toolkit";

import discover from "./modules/discover";

const store = configureStore({
    reducer: {
        discover: discover
    }
})

export default store
