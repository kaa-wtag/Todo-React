// import { ADD } from "../constants/constants";

const initialTodos = {
  todos: [
    { text: "Finish homework", createdAt: "27.06.2023" },
    { text: "Go grocery shopping", createdAt: "27.06.2023" },
  ],
};

const addReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case "ADD":
      const newTodo = {
        text: action.payload.text,
        createdAt: action.payload.createdAt,
      };
      return {
        ...state,
        todos: [newTodo, ...state.todos],
      };
    default:
      return {
        ...state,
      };
  }
};

export default addReducer;
