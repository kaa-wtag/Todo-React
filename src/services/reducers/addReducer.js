import { v4 as uuidv4 } from "uuid";
import { formatDate } from "Helpers/helpers";

const initialTodos = {
  todos: [],
};

const addReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case "ADD":
      const newTodo = {
        id: uuidv4(),
        text: action.payload.text,
        createdAt: formatDate(),
      };
      return {
        ...state,
        todos: [newTodo, ...state.todos],
      };
    default:
      return state;
  }
};

export default addReducer;
