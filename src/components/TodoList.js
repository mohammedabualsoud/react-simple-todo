import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo/Todo'

const TodoList = ({ todos, updateStatus, removeToDo, updateToDo }) => {
    return (
        <ul>
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    removeToDo={removeToDo}
                    updateToDo={updateToDo}
                />
            )}
        </ul>
    )
}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  // updateStatus: PropTypes.func.isRequired,
  removeToDo: PropTypes.func.isRequired,
  updateToDo: PropTypes.func.isRequired,
}

export default TodoList
