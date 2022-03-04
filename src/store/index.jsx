import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// create slice/Reducer for counter & showCounter
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    reset(state, action) {
      state.counter = action.payload;
    },
    showCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// initial state for authentication
const initialAuthState = { isAuthenticated: false };

// create slice for authentication
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, authentication: authSlice.reducer },
});

// create actions for counter
export const counterActions = counterSlice.actions;

// create actions for authentication
export const authActions = authSlice.actions;

export default store;
