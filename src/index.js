import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'
import todoApp from './reducers'
import App from './components/app'
import { fetchTodos } from './actions/index'


let store = createStore(
  todoApp,
  applyMiddleware(thunk, logger()),
)

store.dispatch((dispatch) =>{
  dispatch({type:"FEATCH_TODO_LIST"})
  axios.get("http://0.0.0.0:3000/api/todos")
    .then((response) => {
      dispatch(fetchTodos(response.data))
    })
    .catch((err) =>{
      dispatch({type:"TODO_ERROR", payload: err})
    })
})

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('app')
)
