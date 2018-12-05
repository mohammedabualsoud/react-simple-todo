import {addTodoCommand, updateTodoCommand, removeTodoCommand, getTodosCommand} from "../commands/todoService"

export const UPDATE_TODO = 'UPDATE_TODO'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const SET_TODOS = 'SET_TODOS'


export const addTodo = (id, text, status) => ({
  type: ADD_TODO,
  id,
  text,
  status
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const setTodos = todos => ({
    type: SET_TODOS,
    todos
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
    updateTodoCommand(id, key, value)
        .then(({id}) => {
            dispatch(updateToDo(id, key, value))
        })
    // todo:: show up errors

}

export const removeTodoAction = (id) => (dispatch) => {
    removeTodoCommand(id).then(() => {
        dispatch(removeTodo(id))
    })
    // todo:: show up errors
}

export const addTodoAction = (text) => (dispatch) => {
    addTodoCommand(text)
        .then(({id, text, status}) => {
            dispatch(addTodo(id, text, status))
        })
    // todo:: show up errors
}

export const getTodosAction = () => (dispatch) => {
    getTodosCommand()
    .then((todos) => {
        dispatch(setTodos(todos))
    })
    .catch(() => {
        dispatch(setTodos([]))
    })
}
