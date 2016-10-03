import reducer from './reducers/index'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';
import promise from 'redux-promise';

export default function configureStore(initialState) {
  const logger = createLogger()
  const store = createStore(
      reducer,
      initialState,
      applyMiddleware(thunk, promise, logger)
  )

  return store

}
