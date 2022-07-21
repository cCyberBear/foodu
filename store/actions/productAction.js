import { producyService } from "../../services/ProductService";
import {
  CURRENT_ID,
  GET_ALL_PRODUCT,
  GET_TOP_PRODUCT,
  PRODUCT_BY_ID,
} from "../types/ProductTypes";

const getTopProductAction = () => async (dispatch) => {
  try {
    const { data } = await producyService.getTopProduct();
    dispatch({ type: GET_TOP_PRODUCT, payload: data.data });
  } catch (error) {
    console.log(error.response?.data);
  }
};
const getAllProductAction = () => async (dispatch) => {
  try {
    const { data } = await producyService.getAllProduct();
    dispatch({ type: GET_ALL_PRODUCT, payload: data.products });
  } catch (error) {
    console.log(error.response?.data);
  }
};

const getProductById = (id) => async (dispatch) => {
  try {
    const { data } = await producyService.getProductById(id);
    dispatch({ type: PRODUCT_BY_ID, payload: data.data });
  } catch (error) {
    console.log(error.response?.data);
  }
};
export { getTopProductAction, getAllProductAction, getProductById };
