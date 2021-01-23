import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourite } from "../actions";
// import { StoreContext } from "../index";
import { connect } from "../index";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    // store.subscribe(() => {
    //   this.forceUpdate(); //never use this method to update unless testing
    // });
    //make api call
    //dispatch action
    this.props.dispatch(addMovies(data));
    console.log("state", this.props);
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props;

    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourite(val));
  };
  render() {
    const { movies, search } = this.props;
    const { list, favourites, showFavourite } = movies;
    console.log("RENDER", this.props);
    const displayMovies = showFavourite ? favourites : list;
    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourite ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourite ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>
        </div>
        <div className="list">
          {displayMovies.map((movie, index) => (
            <MovieCard
              movie={movie}
              key={`movies-${index}`}
              dispatch={this.props.dispatch}
              isFavourite={this.isMovieFavourite(movie)}
            />
          ))}
        </div>
        {displayMovies.length === 0 ? (
          <div className="no-movies">No Movies to Display</div>
        ) : null}
      </div>
    );
  }
}
// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }
function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search,
  };
}
const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
