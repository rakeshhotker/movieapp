import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate(); //never use this method to update unless testing
    });
    //make api call
    //dispatch action
    store.dispatch(addMovies(data));
    console.log("state", this.props.store.getState());
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
        </div>
        <div className="list">
          {data.map((movie, index) => (
            <MovieCard
              movie={movie}
              key={`movies-${index}`}
              dispatch={this.props.store.dispatch}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
