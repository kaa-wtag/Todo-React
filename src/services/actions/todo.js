export const addTodo = (props) => {
    return {
        type: "ADD",
        payload: props,
    };
};