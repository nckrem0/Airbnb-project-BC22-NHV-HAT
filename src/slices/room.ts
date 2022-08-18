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

export const getRoomsList = createAsyncThunk(
  EnumThunkAction.GET_ROOM_LIST,
  async (query: any) => {
    try {
      const { locationName, locationId, limit, offset } = query;
      const data = await airbnbAPI.getRoomsList(locationId, limit, offset);

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
  name: Action.ROOMS,
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider.addCase(getRoomsList.pending, (state) => {
      return { ...state, isLoading: true };
    });
    buider.addCase(getRoomsList.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    buider.addCase(getRoomsList.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message as string };
    });
  },
});
export default locationSlice.reducer;
