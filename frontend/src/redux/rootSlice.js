// to put data in the reducer, we need to create a slice
import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        isLoading: false,
        portfollioData: null
    },
    reducers: {
        ShowLoading: (state) => {
            state.isLoading = true;
        },
        HideLoading: (state) => {
            state.isLoading = false;
        },
        SetPortfollioData: (state, action) => {
            state.portfollioData = action.payload;
        }
    }
})

export default rootSlice.reducer;
export const { ShowLoading, HideLoading, SetPortfollioData } = rootSlice.actions;