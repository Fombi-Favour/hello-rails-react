import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    message: null,
};

export const fetchGreeting = createAsyncThunk('message/fetchGreeting', async () => {
    try {
        const response = await fetch('/greetings');
        const data = await response.json();
        return data.greeting;
    } catch (err) {
        throw new Error('Failed to fetch greeting')
    }
})

const greetingSlice = createSlice({
   name: 'greeting',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
       builder.addCase(fetchGreeting.fulfilled, (state, action) => {
           state.message = action.payload;
       }).addCase(fetchGreeting.rejected, (state, action) => {
           state.message = "";
       })
    }
});

export default greetingSlice.reducer;