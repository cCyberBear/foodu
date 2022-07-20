import { catetgoryService } from "../../services/CategoryServices";
import { GET_ALL_CATEGORY } from "../types/CategoryTypes";
const getAllCatetgoryAction = () => async (dispatch) => {
  try {
    const { data } = await catetgoryService.getAllCategory();
    dispatch({ type: GET_ALL_CATEGORY, payload: data.data });
  } catch (error) {
    console.log(error.response?.data);
  }
};
export { getAllCatetgoryAction };
