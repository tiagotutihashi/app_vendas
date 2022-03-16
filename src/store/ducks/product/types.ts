import Product from '../../../interfaces/product'
import {
    PRODUCT_GET_REQUEST,
    PRODUCT_GET_SUCCESS,
    PRODUCT_GET_FAILURE
  } from "./actionTypes";
  
  export interface ProductState {
    loading: boolean;
    data: Product[];
    error: string | null;
  }
  
  export interface ProductGetSuccessPayload {
    data: Product[];
  }
  
  export interface ProductGetFailuretPayload {
    error: string;
  }
  
  export interface ProductGetRequest {
    type: typeof PRODUCT_GET_REQUEST;
  }
  
  export type ProductGetSuccess = {
    type: typeof PRODUCT_GET_SUCCESS;
    payload: ProductGetSuccessPayload;
  };
  
  export type ProductGetFailure = {
    type: typeof PRODUCT_GET_FAILURE;
    payload: ProductGetFailuretPayload;
  };
  
  export type ProductActions =
    | ProductGetRequest
    | ProductGetSuccess
    | ProductGetFailure;