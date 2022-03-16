import api from "../../../utils/api";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  productGetSuccessPayload,
  productGetFailuretPayload,
} from "../../ducks/product/actions";
import { PRODUCT_GET_REQUEST } from "../../ducks/product/actionTypes";
import { ProductGetSuccessPayload } from "../../ducks/product/types";

function* fetchTodoSaga() {
  try {
    const response: ProductGetSuccessPayload = yield call(api.get, "/products");
    yield put(
      productGetSuccessPayload({
        data: response.data,
      }),
    );
  } catch (e) {
    yield put(
      productGetFailuretPayload({
        //@ts-ignore
        error: e.message,
      }),
    );
  }
}

function* todoSaga() {
  yield all([takeLatest(PRODUCT_GET_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;
