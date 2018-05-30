import { REQUEST_PRODUCT_DATA, RECEIVE_PRODUCT_DATA } from '../actions/types';

const initialState = {
  isFetching: false,
  data: []
}

function fetchDataReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PRODUCT_DATA:
      return {
        ...state,
        isFetching: action.payload
      }
    case RECEIVE_PRODUCT_DATA: {
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    }
    default:
      return state;
  }
}

export default fetchDataReducer;
