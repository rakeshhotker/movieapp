import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";
//import LogRocket from "logrocket";
//LogRocket.init("3i2v1t/movieapp");

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log("ACTION_TYPE=", action.type);
//       next(action);
//     };
//   };
// };

const logger = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action !== "function") {
    console.log("ACTION_TYPE=", action.type);
  }
  next(action);
};
//it's available in the redux package
// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   // console.log("ACTION_TYPE=", action.type);
//   if (typeof action === "function") {
//     action(dispatch);
//     return;
//   }
//   next(action);
// };
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log("store", store);
// console.log("BEFORE STATE", store.getState());
// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Superman" }],
// });
// console.log("AFTER STATE", store.getState());

export const StoreContext = createContext();
console.log("StoreContext", StoreContext);

class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
