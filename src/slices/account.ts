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

export const getAccountInfo = createAsyncThunk(EnumThunkAction.GET_ACCOUNT, async () => {
    try {
        let user: any = localStorage.getItem("user");
        user = JSON.parse(user);

        const { _id } = user.user;

        const data = await airbnbAPI.getAccountInfo(_id);

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
        buider.addCase(getAccountInfo.pending, (state) => {
            return { ...state, isLoading: true };
        });
        buider.addCase(getAccountInfo.fulfilled, (state, { payload }) => {
            return { ...state, isLoading: false, data: payload };
        });
        buider.addCase(getAccountInfo.rejected, (state, { error }) => {
            return { ...state, isLoading: false, error: error.message as string };
        });
    },
});
export default accountSlice.reducer;
