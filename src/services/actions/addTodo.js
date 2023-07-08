export const addTodo = (props) => {
    const { text, created_at } = props;
    return {
        type: "ADD",
        payload: {
            text: text,
            createdAt: createdAt,
        },
    };
};


export const deleteTodo = (index) => {
    return {
        type: "DELETE",
        payload: {
            index: index,
        },
    };
};

export const deleteTodo = (index) => {
    return {
        type: "DELETE",
        payload: {
            index: index,
        },
    };
};