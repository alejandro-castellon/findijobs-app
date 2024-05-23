import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Resume, ResumeProfile, ResumeEducation } from "@/types/types";
import type { RootState } from "@/hooks/redux/store";

const initialProfile: ResumeProfile = {
  name: "",
  summary: "",
  email: "",
  phone: "",
  location: "",
  url: "",
};

const initialEducation: ResumeEducation = {
  school: "",
  degree: "",
  date: "",
};

export const initialResumeState: Resume = {
  profile: initialProfile,
  education: initialEducation,
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
    changeEducation: (
      state,
      action: PayloadAction<{ field: keyof ResumeEducation; value: string }>
    ) => {
      const { field, value } = action.payload;
      state.education[field] = value;
    },
  },
});

export const { changeProfile, changeEducation } = resumeSlice.actions;

export const selectResume = (state: RootState) => state.resume;
export const selectProfile = (state: RootState) => state.resume.profile;
export const selectEducation = (state: RootState) => state.resume.education;

export default resumeSlice.reducer;
