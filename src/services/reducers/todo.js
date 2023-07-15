const initialTodos = {
    todos: [],
};

const todoReducer = (state = initialTodos, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                todos: [
                    action.payload,
                    ...state.todos,
                ],
            };

        case "DELETE":
            const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
            return {
                ...state,
                todos: updatedTodos,
            };

        case "MARK_DONE":
            const markedTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        isCompleted: true,
                    };
                }
                return todo;
            });
            return {
                ...state,
                todos: markedTodos,
            };

        default:
            return state;
    }
};

export default todoReducer;