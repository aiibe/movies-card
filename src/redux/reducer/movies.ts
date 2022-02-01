import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/movies";
import { getMovies } from "../thunk/movies";

const initialState: Movie[] = [];

export const moviesSlice = createSlice({
  initialState,
  name: "movies",
  reducers: {
    likeMovie: (state, action: PayloadAction<string>) => {
      // Bug: Should work with `return` instead
      state.map((m) => {
        if (m.id === action.payload) {
          m.likes += 1;
        }
        return m;
      });
    },
    dislikeMovie: (state, action: PayloadAction<string>) => {
      state.map((m) => {
        if (m.id === action.payload) {
          m.dislikes += 1;
        }
        return m;
      });
    },
    removeMovie: (state, action: PayloadAction<string>) => {
      return state.filter((m) => m.id !== action.payload);
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(getMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
      return [...action.payload];
    });
  },
});

export const { removeMovie, likeMovie, dislikeMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
