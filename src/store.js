import { createStore } from "redux";
import addReducer from "./services/reducers/addReducer";

const store = createStore(addReducer)
export default store;