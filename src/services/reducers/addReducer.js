
import { ADD } from "../constants/constants";

const initialTodos = { todos: [] }

const addReducer = (state=initialTodos, action) => {
  switch (action.type){
    case ADD:
      return {

      }
    
      default: 
        return {}
  }
}

export default addReducer;