export const addTodo = (props) => {
  const { text } = props;
  return {
    type: "ADD",
    payload: {
      text: text,
    },
  };
};


export const deleteTodo = (id) => {
  return {
    type: "DELETE",
    payload: {
      id: id,
    },
  };
};
