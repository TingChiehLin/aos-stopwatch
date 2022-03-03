import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialState = {
    isTimeOn: false,
    isReset: false,
}

const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        startTimer(state) {
            state.isTimeOn = true
            state.isReset = false
        },
        pauseTimer(state) {
            state.isTimeOn = !state.isTimeOn
            state.isReset = false
        },
        resetTimer(state) {
            state.isReset = true
        }

    }
});

const store = configureStore({
    reducer: {timer: timerSlice.reducer}
});

export const timerActions = timerSlice.actions;
export default store;

