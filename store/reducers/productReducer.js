import { GET_ALL_PRODUCT, GET_TOP_PRODUCT } from "../types/ProductTypes";

const initialState = {
  listProducts: [],
  topProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_PRODUCT:
      return { ...state, topProducts: action.payload };
    case GET_ALL_PRODUCT:
      return { ...state, listProducts: action.payload };
    default:
      return state;
  }
};
export default productReducer;
