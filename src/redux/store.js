import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import logger from "redux-logger";

import rootReducer from "./rootReducer";

// Custom middle ware example.
const mymiddleWare = (store) => (next) => (action) => {
  // console.log("Called middleware");

  // This is a closure like function which is 3 level so es6 have made it easy.

  // this moved the application to next level.
  next(action);
};

const store = createStore(rootReducer, applyMiddleware(mymiddleWare, thunk));
export default store;
