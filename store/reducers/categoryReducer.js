import { GET_ALL_CATEGORY } from "../types/CategoryTypes";

const initialState = {
  listCategories: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return { ...state, listCategories: action.payload };
    default:
      return state;
  }
};
export default categoryReducer;
