import {
    PRODUCT_GET_REQUEST,
    PRODUCT_GET_SUCCESS,
    PRODUCT_GET_FAILURE
  } from "./actionTypes";
  import {
    ProductGetRequest,
    ProductGetSuccess,
    ProductGetFailure,
    ProductGetSuccessPayload,
    ProductGetFailuretPayload
  } from "./types";
  
  export const productGetRequest = (): ProductGetRequest => ({
    type: PRODUCT_GET_REQUEST,
  });
  
  export const productGetSuccessPayload = (
    payload: ProductGetSuccessPayload
  ): ProductGetSuccess => ({
    type: PRODUCT_GET_SUCCESS,
    payload,
  });
  
  export const productGetFailuretPayload = (
    payload: ProductGetFailuretPayload
  ): ProductGetFailure => ({
    type: PRODUCT_GET_FAILURE,
    payload,
  });