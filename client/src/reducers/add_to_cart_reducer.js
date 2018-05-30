import { ADD_TO_CART, DELETE_ITEM } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  sku: '',
  price: ''
}

function addToCardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        {
        name: action.payload.name,
        sku: action.payload.sku,
        price: action.payload.ourPrice
        }
      ];
    case DELETE_ITEM:
      return state.filter(item => item.sku !== action.sku);
    default:
      return state;
  }
}

export default addToCardReducer;
