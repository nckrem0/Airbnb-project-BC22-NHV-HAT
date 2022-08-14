import { IReview } from "interfaces/review";
import airbnbAPI from "services/airbnbAPI";
import { Action, EnumThunkAction } from "enum/airbnb.enum";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ReviewState {
    data: IReview[];
    isLoading: boolean;
    error: string;
}

const initialState: ReviewState = {
    data: [],
    isLoading: true,
    error: "",
};

export const getReviewlList = createAsyncThunk(EnumThunkAction.GET_ROOM_REVIEW, async (roomId: string) => {
    try {
        const data = await airbnbAPI.getReviewlList(roomId);
        return data;
    } catch (error) {
        throw error;
    }
});

const roomReviewSlice = createSlice({
    name: Action.ROOM_REVIEW,
    initialState,
    reducers: {},
    extraReducers: (buider) => {
        buider.addCase(getReviewlList.pending, (state) => {
            return { ...state, isLoading: true };
        });
        buider.addCase(getReviewlList.fulfilled, (state, { payload }) => {
            return { ...state, isLoading: false, data: payload };
        });
        buider.addCase(getReviewlList.rejected, (state, { error }) => {
            return { ...state, isLoading: false, error: error.message as string };
        });
    },
});
export default roomReviewSlice.reducer;
