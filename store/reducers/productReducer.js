import {
  GET_ALL_PRODUCT,
  GET_TOP_PRODUCT,
  PRODUCT_BY_ID,
  PRODUCT_VIEW,
} from "../types/ProductTypes";

const initialState = {
  listProducts: [],
  topProducts: [],
  currentProduct: {},
  productView: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_PRODUCT:
      return { ...state, topProducts: action.payload };
    case GET_ALL_PRODUCT:
      return { ...state, listProducts: action.payload };
    case PRODUCT_BY_ID:
      return { ...state, currentProduct: action.payload };
    case PRODUCT_VIEW:
      return { ...state, productView: action.payload };
    default:
      return state;
  }
};
export default productReducer;
