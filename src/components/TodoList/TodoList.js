import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../Todo/Todo'

class TodoList extends React.Component {

    componentDidMount() {
        // initalize/get the todos items.
        this.props.getTodos()
    }

    render() {
        const { todos, removeToDo, updateToDo } = this.props
        return (
            <div className="u-margin-all">
                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        removeToDo={removeToDo}
                        updateToDo={updateToDo}
                    />
                )}
            </div>
        )
    }
}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  removeToDo: PropTypes.func.isRequired,
  updateToDo: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,

}

export default TodoList
