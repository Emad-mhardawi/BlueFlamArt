import {USER_LOGIN_FAIL, ORDER_COLLECT_DATA } from "./actionsTypes";
  import axios from "axios";
  

  export const collectFormData = (data) => (dispatch) => {
    dispatch({
        type: ORDER_COLLECT_DATA,
        payload: data
      });
  };
  