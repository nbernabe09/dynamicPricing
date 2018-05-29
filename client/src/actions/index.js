import axios from 'axios';
import { ADD_TO_CART, DELETE_ITEM, REQUEST_PRODUCT_DATA, RECEIVE_PRODUCT_DATA } from './types';

export const addToCart = (name, sku, ourPrice) => async dispatch => {
  dispatch({ type: ADD_TO_CART, payload: {
    name,
    sku,
    ourPrice
  }});
}

export const deleteItem = sku => {
  return {
    type: DELETE_ITEM,
    sku
  }
}

const requestProductData = () => {
  return {
    type: REQUEST_PRODUCT_DATA,
    payload: true
  }
}

const receiveProductData = data => {
  return {
    type: RECEIVE_PRODUCT_DATA,
    payload: data
  }
}

export const fetchProductData = data => async dispatch => {
  dispatch(requestProductData());
  const request = await axios.get('/api/data');
  const { data } = request;
  dispatch(receiveProductData(data));
}
