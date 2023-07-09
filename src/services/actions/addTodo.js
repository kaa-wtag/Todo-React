export const addTodo = (props) => {
  const { text, createdAt } = props;
  return {
    type: "ADD",
    payload: {
      text: text,
      createdAt: createdAt,
    },
  };
};
