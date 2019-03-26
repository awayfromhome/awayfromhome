import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import authReducer from './auth/authReducer';
import reducer from './reducer';

const logger = createLogger({
  duration: true,
  timestamp: true,
  diff: true
});

const rootReducer = combineReducers({ authReducer, reducer });
const middlewares = applyMiddleware(thunk, logger);

export default createStore(rootReducer, middlewares);
