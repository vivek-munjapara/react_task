import { ADD_TO_CART, DELETE_FROM_CART, FETCH_PRODUCT_DATA } from "../actionType";

export const ProductData = payload => ({
  type: FETCH_PRODUCT_DATA,
  payload,
});

export const ProductDataAdd = payload => ({
  type: ADD_TO_CART,
  payload,
});

export const ProductDataDelete = payload => ({
  type: DELETE_FROM_CART,
  payload,
});
