import { createStore } from "redux";
import rooutReducer from "../Reducers";


const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rooutReducer, devtools);

export default store;
