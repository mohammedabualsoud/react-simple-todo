import {UPDATE_TODO, ADD_TODO, REMOVE_TODO} from "../actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          status: 'active'
        }
      ]
      case UPDATE_TODO:
          return state.map(todo =>
              (todo.id === action.id)
                  ? {...todo, [action.key]: action.value}
                  : todo
          )
      case REMOVE_TODO:
          return state.filter(todo => todo.id !== action.id)

    default:
      return state
  }
}

export default todos
