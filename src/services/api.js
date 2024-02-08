import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org`;
axios.defaults.params = {
  api_key: `e213bd1098f995fabecb969ed6e87f4a`,
  language: 'en-US',
};

export const requestPopularMovies = async () => {
  const { data } = await axios.get(`/3/trending/all/day`);
  return data;
};

export const requestDetailsMovie = async movieId => {
  const { data } = await axios.get(`/3/movie/${movieId}`);
  return data;
};

export const requestCastMovie = async movieId => {
  const { data } = await axios.get(`/3/movie/${movieId}/credits`);
  return data;
};

export const requestReviewsMovie = async movieId => {
  const { data } = await axios.get(`/3/movie/${movieId}/reviews`);
  return data;
};

export const requestMoviesByQuery = async query => {
  const { data } = await axios.get(
    `3/search/movie?query=${query}&include_adult=false`
  );
  return data;
};
