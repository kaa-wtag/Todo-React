import { createStore } from "redux";
import addReducer from "./services/reducers/reducers";

const store = createStore(addReducer)
export default store;
