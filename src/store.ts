import { configureStore } from "@reduxjs/toolkit";
import location from "slices/location";
const store = configureStore({
    reducer: {
        location,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
