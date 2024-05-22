import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Resume, ResumeProfile } from "@/types/types";
import type { RootState } from "@/hooks/redux/store";

const initialProfile: ResumeProfile = {
  name: "",
  summary: "",
  email: "",
  phone: "",
  location: "",
  url: "",
};

export const initialResumeState: Resume = {
  profile: initialProfile,
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState: initialResumeState,
  reducers: {
    changeProfile: (
      state,
      action: PayloadAction<{ field: keyof ResumeProfile; value: string }>
    ) => {
      const { field, value } = action.payload;
      state.profile[field] = value;
    },
  },
});

export const { changeProfile } = resumeSlice.actions;

export const selectResume = (state: RootState) => state.resume;
export const selectProfile = (state: RootState) => state.resume.profile;

export default resumeSlice.reducer;
