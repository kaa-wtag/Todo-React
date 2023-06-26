// import { ADD } from "../constants/constants"

export const addTodo = (props) => {
  const { text } = props;

  console.log(text);
  return {
    type: 'ADD',
    payload: {
      text: text,
    },
  };
}
