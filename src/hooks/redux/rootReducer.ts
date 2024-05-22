import { combineReducers } from "@reduxjs/toolkit";
import resumeReducer from "./resumeSlice";

const rootReducer = combineReducers({
  resumeState: resumeReducer,
});

export default rootReducer;
