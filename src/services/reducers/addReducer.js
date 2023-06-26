// import { ADD } from "../constants/constants";

const initialTodos = {
  todos: [
    { text: "Finish homework", completed: false },
    { text: "Go grocery shopping", completed: true },
  ],
  showNewTodoForm: false
};

const addReducer = (state=initialTodos, action) => {
  let newTodo;
  // eslint-disable-next-line no-debugger
  debugger;
  switch (action.type) {
    case "ADD":
      newTodo = {
        text: action.payload.text,
        completed: false,
      };
      return {
        ...state,
        todos: [newTodo, ...state.todos],
      };

    case "FORM_CLOSE/OPEN":
      newTodo = {
        text: action.payload.text,
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
}

export default addReducer;