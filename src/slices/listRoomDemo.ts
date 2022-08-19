import airbnbAPI from "services/airbnbAPI";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IRoomDetails } from "interfaces/room-details";

interface RoomState {
  data: IRoomDetails[];
  isLoading: boolean;
  error: string;
}

const initialState: RoomState = {
  data: [],
  isLoading: false,
  error: "",
};

export const getListRoomRental = createAsyncThunk(
  "rooms/getListRoomRental",
  async (locationId: string) => {
    try {
      const data = await airbnbAPI.getListRoomRental(locationId);

      return data;
    } catch (error) {
      throw error;
    }
  }
);

const roomsListSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider.addCase(getListRoomRental.pending, (state) => {
      return { ...state, isLoading: true };
    });
    buider.addCase(getListRoomRental.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    buider.addCase(getListRoomRental.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message as string };
    });
  },
});

export default roomsListSlice.reducer;
