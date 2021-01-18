// {
//   type: "INCREASE_COUNT";
// }
// {
//   type: "DECREASE_COUNT";
// }
//action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";
//action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
export function addFavourite(movie) {
  return {
    type: ADD_TO_FAVOURITES,
    movie,
  };
}
export function removeFavourite(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie,
  };
}
export function setShowFavourite(val) {
  return {
    type: SET_SHOW_FAVOURITE,
    val,
  };
}
