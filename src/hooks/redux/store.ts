import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./resumeSlice";

const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
