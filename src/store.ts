import { configureStore } from "@reduxjs/toolkit";
import auth from "slices/auth";
import location from "slices/location";
import room from "slices/room";
import review from "slices/review";
import roomdetail from "slices/room-details";
import signup from "slices/signup";
import account from "slices/account";
import listRoomDemo from "slices/listRoomDemo";

const store = configureStore({
  reducer: {
    location,
    room,
    roomdetail,
    review,
    auth,
    signup,
    account,
    listRoomDemo,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
