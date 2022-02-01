import { createAsyncThunk } from "@reduxjs/toolkit";
import { movies$ } from "../../services/movies";
import { Movie } from "../../types/movies";

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  return (await movies$) as Movie[];
});
