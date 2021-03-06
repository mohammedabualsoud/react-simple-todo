import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';


import thunk from 'redux-thunk';

import { Provider } from 'react-redux'
import App from './components/App/App'
import rootReducer from './reducers'
import './style.scss'


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk
        )
        // other store enhancers if any
    )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
