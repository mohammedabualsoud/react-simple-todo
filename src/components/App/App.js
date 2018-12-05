import React from 'react'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'

const App = () => (
  <div className="c-app">
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App
