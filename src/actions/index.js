export const UPDATE_TODO = 'UPDATE_TODO'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const UPDATE_STATUS = 'UPDATE_STATUS'

let nextTodoId = 0
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
})


export const updateToDo = (id, key, value) => ({
    type: UPDATE_TODO,
    id,
    key,
    value
})

export const updateToDoAction = (id, key, value) => (dispatch) => {
    dispatch(updateToDo(id, key, value))
}

export const removeTodoAction = (id) => (dispatch) => {
    dispatch(removeTodo(id))
}




export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
