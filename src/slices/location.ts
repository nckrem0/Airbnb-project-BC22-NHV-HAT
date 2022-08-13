import { ILocationList } from "interfaces/location-list";
import airbnbAPI from "services/airbnbAPI";
import { Action, EnumThunkAction } from "enum/airbnb.enum";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IQueryLocation } from "interfaces/query";

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

export const getLocationList = createAsyncThunk(EnumThunkAction.GET_LOCATION_LIST, async (query: IQueryLocation) => {
    try {
        const { offset, location, limit } = query;
        const data = await airbnbAPI.getLocationList(offset, location, limit);
        return data;
    } catch (error) {
        throw error;
    }
});

const locationSlice = createSlice({
    name: Action.LOCATIONS,
    initialState,
    reducers: {},
    extraReducers: (buider) => {
        buider.addCase(getLocationList.pending, (state) => {
            return { ...state, isLoading: true };
        });
        buider.addCase(getLocationList.fulfilled, (state, { payload }) => {
            return { ...state, isLoading: false, data: payload };
        });
        buider.addCase(getLocationList.rejected, (state, { error }) => {
            return { ...state, isLoading: false, error: error.message as string };
        });
    },
});
export default locationSlice.reducer;
