import React from 'react'
import { connect } from 'react-redux'
import { addTodoAction } from '../actions'
import PropTypes from "prop-types";

const AddTodo = ({addTodoAction}) => {
  let input

  return (
    <div className="u-margin-all">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addTodoAction(input.value)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  addTodoAction: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
    addTodoAction
}
export default connect(null, mapDispatchToProps)(AddTodo)
