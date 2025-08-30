import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface VideoState {
  currentId: string | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

const initialState: VideoState = {
  currentId: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    playVideo: (state, action: PayloadAction<string>) => {
      state.currentId = action.payload;
      state.isPlaying = true;
      state.currentTime = 0;
    },
    pauseVideo: (state) => {
      state.isPlaying = false;
    },
    stopVideo: (state) => {
      state.currentId = null;
      state.isPlaying = false;
      state.currentTime = 0;
      state.duration = 0;
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
  },
});

export const { playVideo, pauseVideo, stopVideo, setTime, setDuration } =
  videoSlice.actions;

export default videoSlice.reducer;
