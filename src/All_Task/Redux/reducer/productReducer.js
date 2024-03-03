import { ADD_TO_CART, DELETE_FROM_CART, FETCH_PRODUCT_DATA } from "../actionType";

const initialState = {};

export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_DATA:
      return [...state, ...payload];

    case ADD_TO_CART:
      let addToCart = [...state];
      addToCart.push(payload);
      return addToCart;

    case DELETE_FROM_CART:
      let dltFromCart = [...state];
      dltFromCart.pop(payload);
      return dltFromCart;

    default:
      return state;
  }
};
