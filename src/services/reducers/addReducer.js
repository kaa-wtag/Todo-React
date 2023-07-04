// import { ADD } from "../constants/constants";

const initialTodos = {
  todos: [
    { text: "Finish homework", createdAt: "27.06.2023", completed: false },
    { text: "Go grocery shopping", createdAt: "27.06.2023", completed: true },
  ],
};

const addReducer = (state = initialTodos, action) => {
  let newTodo;
  switch (action.type) {
    case "ADD":
      newTodo = {
        text: action.payload.text,
        createdAt: action.payload.createdAt,
        completed: false,
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
