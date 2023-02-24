import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { getProductReducer } from "./reducers/productReducer";

// combining reducers because createStore takes single reducer and we need multiple reducers
const reducer = combineReducers({
  getProducts: getProductReducer,
});

// npm i redux-devtools-extension - using composeWithDevTools for passing middleware as arguement

// middleware using thunk for api to get request call
const middleware = [thunk];

// takes two arguements 1. reducer 2. middleware
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
