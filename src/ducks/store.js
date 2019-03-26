import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import authReducer from './auth/authReducer';
import listReducer from './lists/listReducer';

const logger = createLogger({
  duration: true,
  timestamp: true,
  diff: true
});

const rootReducer = combineReducers({ authReducer, listReducer });
const middlewares = applyMiddleware(thunk, logger);

export default createStore(rootReducer, middlewares);
