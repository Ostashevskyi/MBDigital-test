import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { ICourseCard } from "../../types/cards/courseCard";

export const fetchCourses = createAsyncThunk<ICourseCard[]>(
  "courses/fetchCourses",
  async () => {
    const res = await fetch("http://localhost:5000/courses");
    if (!res.ok) {
      throw new Error("Failed to fetch courses");
    }
    return (await res.json()) as ICourseCard[];
  }
);

interface CoursesState {
  data: ICourseCard[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  data: [],
  isLoading: false,
  error: null,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong while fetching courses";
      });
  },
});

export default coursesSlice.reducer;
