export const addTodo = (props) => {
    return {
        type: "ADD",
        payload: props,
    };
};

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: id,
    };
};

export const markDone = (id) => {
    return {
        type: "MARK_DONE",
        payload: id,
    };
};

export const editTodoText = (id, newText) => {
    return {
        type: "EDIT_TODO",
        payload: {
            id: id,
            newText: newText,
        },
    };
};
