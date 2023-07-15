export const addTodo = (props) => {
  return {
    type: "ADD",
    payload: props,
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
