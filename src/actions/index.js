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
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
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
export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}
export function handleMovieSearch(movie) {
  const url = `http://www.omdbapi.com/?apikey=fcbdb183&s=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);

        //dispatch an action
        //dispatch({type:'ADD_SEARCH_RESULT',movie})
      });
  };
}
