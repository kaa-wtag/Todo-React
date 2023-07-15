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

export const markDone = (id) => {
  return {
    type: "MARK_DONE",
    payload: {
      id: id,
    },
  };
};
