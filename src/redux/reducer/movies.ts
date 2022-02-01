import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/movies";
import { getMovies } from "../thunk/movies";

const initialState: Movie[] = [];

export const moviesSlice = createSlice({
  initialState,
  name: "movies",
  reducers: {
    likeMovie: (state, action: PayloadAction<string>) => {
      // Mutation possible via Immer internally (don't use map function)
      state.forEach((item) => {
        if (action.payload === item.id) {
          item.likes++;
        }
      });
    },
    dislikeMovie: (state, action: PayloadAction<string>) => {
      state.forEach((item) => {
        if (action.payload === item.id) {
          item.dislikes++;
        }
      });
    },
    removeMovie: (state, action: PayloadAction<string>) => {
      // Or return new state (not working with map)
      return state.filter((m) => m.id !== action.payload);
    },
  },
  extraReducers: ({ addCase }) => {
    // Builder cases pending, fulfilled, rejected by thunk
    addCase(getMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
      return [...action.payload];
    });
  },
});

export const { removeMovie, likeMovie, dislikeMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
