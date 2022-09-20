import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import cart from './cart/cart-reducers';
import ArrayReducer from './ArrayOperation/ArrayReducer';

import thunk from 'redux-thunk';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import {offline} from '@redux-offline/redux-offline';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
const rootReducer = combineReducers({
  cart,
  ArrayReducer,
});
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];
const Store = createStore(
  rootReducer,
  // compose(applyMiddleware(...middlewares), offline(offlineConfig)),
  applyMiddleware(...middlewares),
);
sagaMiddleware.run(saga);
export default Store;
