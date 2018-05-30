import { combineReducers } from 'redux';
import addToCartReducer from './add_to_cart_reducer';
import fetchDataReducer from './fetch_data_reducer';

const rootReducer = combineReducers({
  cart: addToCartReducer,
  products: fetchDataReducer
});

export default rootReducer;
