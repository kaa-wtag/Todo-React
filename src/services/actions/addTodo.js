// import { ADD } from "../constants/constants"

export const addTodo = (props) => {
  const { text } = props;
  return {
    type: 'ADD',
    payload: {
      text: text,
    },
  };
}
