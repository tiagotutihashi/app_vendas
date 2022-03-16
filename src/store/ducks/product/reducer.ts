import {
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_SUCCESS,
  PRODUCT_GET_FAILURE,
} from "./actionTypes";

import { ProductActions, ProductState } from "./types";

const initialState: ProductState = {
  loading: false,
  data: [],
  error: null,
};

export default (state = initialState, action: ProductActions) => {
  switch (action.type) {
    case PRODUCT_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null,
      };
    case PRODUCT_GET_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
