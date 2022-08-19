import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import ILocationList from "../interfaces/location-list";
import { Action, EnumThunkAction } from "../enum/airbnb.enum";
import airbnbAPI from "../services/airbnbAPI";
import airbnbAPIDemo from "services/airbnbAPIDemo";

interface LocationState {
  data: ILocationList[];
  isLoading: boolean;
  error: string;
}

const initialState: LocationState = {
  data: [],
  isLoading: true,
  error: "",
};

export const getLocationListDemo = createAsyncThunk(
  EnumThunkAction.GET_LOCATION_LIST,
  async () => {
    try {
      const data = await airbnbAPIDemo.getLocationList();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const locationDemoSlice = createSlice({
  name: Action.LOCATIONS,
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider.addCase(getLocationListDemo.pending, (state) => {
      return { ...state, isLoading: true };
    });
    buider.addCase(getLocationListDemo.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    buider.addCase(getLocationListDemo.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message as string };
    });
  },
});
export default locationDemoSlice.reducer;
