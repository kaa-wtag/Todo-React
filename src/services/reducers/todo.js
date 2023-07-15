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
        default:
            return state;
    }
};

export default todoReducer;