import { IAccount } from "interfaces/account";
import airbnbAPI from "services/airbnbAPI";
import { Action, EnumThunkAction } from "enum/airbnb.enum";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AccountState {
    data: IAccount;
    isLoading: boolean;
    error: string;
}

const initialState: AccountState = {
    data: <IAccount>{},
    isLoading: true,
    error: "",
};

export const getAccountlList = createAsyncThunk(EnumThunkAction.GET_ACCOUNT, async (query: any) => {
    try {
        const { userId } = query;
        console.log(userId);

        const data = await airbnbAPI.getAccountlList(userId);
        console.log(data);

        return data;
    } catch (error) {
        throw error;
    }
});

const accountSlice = createSlice({
    name: Action.ACCOUNT,
    initialState,
    reducers: {},
    extraReducers: (buider) => {
        buider.addCase(getAccountlList.pending, (state) => {
            return { ...state, isLoading: true };
        });
        buider.addCase(getAccountlList.fulfilled, (state, { payload }) => {
            return { ...state, isLoading: false, data: payload };
        });
        buider.addCase(getAccountlList.rejected, (state, { error }) => {
            return { ...state, isLoading: false, error: error.message as string };
        });
    },
});
export default accountSlice.reducer;
