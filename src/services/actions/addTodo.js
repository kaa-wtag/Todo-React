// import { ADD } from "../constants/constants"

export const addTodo = (props) => {
  const { text, created_at } = props;
  return {
    type: "ADD",
    payload: {
      text: text,
      created_at: created_at,
    },
  };
}

export const deleteTodo = (index) => {
  return {
    type: "DELETE",
    payload: {
      index: index,
    },
  };
};
