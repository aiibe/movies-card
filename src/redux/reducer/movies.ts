import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/movies";

const initialState: Movie[] = [];

export const moviesSlice = createSlice({
  initialState,
  name: "movies",
  reducers: {
    removeMovie: (state, action) => {
      return state.filter((m) => m.id !== action.payload);
    },
    fetchMovies: (state, action: PayloadAction<Movie[]>) => {
      return [...action.payload];
    },
  },
});

export const { removeMovie, fetchMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
