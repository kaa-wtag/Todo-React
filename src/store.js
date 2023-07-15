import { createStore } from "redux";
import todoReducer from "./services/reducers/todo";

const store = createStore(todoReducer)
export default store;