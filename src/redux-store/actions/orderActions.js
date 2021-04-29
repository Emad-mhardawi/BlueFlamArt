import { ORDER_COLLECT_DATA } from "./actionsTypes";

  

  export const collectFormData = (data) => (dispatch) => {
    dispatch({
        type: ORDER_COLLECT_DATA,
        payload: data
      });
  };
  