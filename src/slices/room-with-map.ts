import airbnbAPI from "services/airbnbAPI";
import { Action, EnumThunkAction } from "enum/airbnb.enum";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IRoom } from "interfaces/rooms";

import { dataMaps } from "data/maps";

interface RoomState {
  data: IRoom[];
  isLoading: boolean;
  error: string;
}

const initialState: RoomState = {
  data: [],
  isLoading: true,
  error: "",
};

export const getRoomsWithMap = createAsyncThunk(
  EnumThunkAction.ROOM_WITH_MAP,
  async (query: any) => {
    try {
      const { locationName, locationId, limit, offset } = query;
      const data = await airbnbAPI.getRoomsWithMap(locationId, limit, offset);

      // add latitude and longtitude
      try {
        for (const [key, value] of Object.entries(dataMaps)) {
          switch (key.toLowerCase()) {
            case locationName.toLowerCase():
              data.map((item, index) => {
                if (index > value.length - 1) {
                  item.latitude = value[0].latitude;
                  item.longitude = value[0].longitude;
                } else {
                  item.latitude = value[index].latitude;
                  item.longitude = value[index].longitude;
                }

                return item;
              });
              break;
          }
        }
      } catch (error) {}
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const locationSlice = createSlice({
  name: Action.ROOM_WITH_MAP,
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider.addCase(getRoomsWithMap.pending, (state) => {
      return { ...state, isLoading: true };
    });
    buider.addCase(getRoomsWithMap.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    buider.addCase(getRoomsWithMap.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message as string };
    });
  },
});
export default locationSlice.reducer;
