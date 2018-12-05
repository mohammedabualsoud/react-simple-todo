import { connect } from 'react-redux'
import TodoList from '../components/TodoList/TodoList'
import {updateToDoAction, removeTodoAction, getTodosAction} from '../actions'

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = {
    removeToDo: removeTodoAction,
    updateToDo: updateToDoAction,
    getTodos: getTodosAction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
