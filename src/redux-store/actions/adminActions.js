import {ADMIN_GET_USERS_REQUEST, ADMIN_GET_USERS_SUCCESS, ADMIN_GET_USERS_FAIL, ADMIN_DELETE_USER_REQUEST, ADMIN_DELETE_USER_SUCCESS, ADMIN_DELETE_USER_FAIL} from "./actionsTypes";
  import axios from "axios";
  
  
  
  
  export const getUsers = ()=> async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_GET_USERS_REQUEST,
      });
  

      const { userLogin:{userInfo}} = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${userInfo.token}`
        },
      };
  
      const { data } = await axios.get(
        `http://localhost:5000/admin/users`,
        config
      );
  
      dispatch({
        type: ADMIN_GET_USERS_SUCCESS,
        payload: data,
      });
  
    } catch (error) {
      dispatch({
        type: ADMIN_GET_USERS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const deleteUser = (userId)=> async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_DELETE_USER_REQUEST,
      });
  

      const { userLogin:{userInfo}} = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${userInfo.token}`
        },
      };
  
      const { data } = await axios.delete(
        `http://localhost:5000/admin/deleteUser?userId=${userId}`,
        config
      );
  
      dispatch({
        type: ADMIN_DELETE_USER_SUCCESS,
        payload: data,
      });
  
    } catch (error) {
      dispatch({
        type: ADMIN_DELETE_USER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };