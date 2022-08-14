import { IRoomDetails } from "interfaces/room-details";
import airbnbAPI from "services/airbnbAPI";
import { Action, EnumThunkAction } from "enum/airbnb.enum";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface RoomDetailState {
    data: IRoomDetails;
    isLoading: boolean;
    error: string;
}

const initialState: RoomDetailState = {
    data: <IRoomDetails>{},
    isLoading: true,
    error: "",
};

export const getRoomDetailList = createAsyncThunk(EnumThunkAction.GET_ROOM_DETAIL, async (query: any) => {
    try {
        const { detailId } = query;
        const data = await airbnbAPI.getRoomDetailList(detailId);
        return data;
    } catch (error) {
        throw error;
    }
});

const roomDetailSlice = createSlice({
    name: Action.ROOM_DETAIL,
    initialState,
    reducers: {},
    extraReducers: (buider) => {
        buider.addCase(getRoomDetailList.pending, (state) => {
            return { ...state, isLoading: true };
        });
        buider.addCase(getRoomDetailList.fulfilled, (state, { payload }) => {
            return { ...state, isLoading: false, data: payload };
        });
        buider.addCase(getRoomDetailList.rejected, (state, { error }) => {
            return { ...state, isLoading: false, error: error.message as string };
        });
    },
});
export default roomDetailSlice.reducer;
