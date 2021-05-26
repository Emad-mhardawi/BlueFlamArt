import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_ORDERS_REQUEST,
  USER_ORDERS_SUCCESS,
  USER_ORDERS_FAIL
} from "./actionsTypes";
import axios from "axios";




export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
};



export const registerUser = (username, email, password, confirmedPassword)=> async(dispatch)=>{
try{
    dispatch({
        type: USER_REGISTER_REQUEST
    })

    const config = {
        headers: {
          "Content-Type": "application/json",
        }
      };

      const {data} = await axios.post('http://localhost:5000/register',
      {username, email, password, confirmedPassword}, config );

      dispatch({
          type:USER_REGISTER_SUCCESS,
          payload: data
      })

}catch(error){
    dispatch({
        type:USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
}
}


export const getUserDetails = (id)=> async(dispatch, getState)=>{
  try{
      dispatch({
          type: USER_DETAILS_REQUEST
      })
  
      const { userLogin:{userInfo}} = getState()
      const config = {
          headers: {
            "Content-Type": "application/json",
            token: `Bearer ${userInfo.token}`
          }
        };
  
        const {data} = await axios.get(`http://localhost:5000/${id}`, config );
  
        dispatch({
            type:USER_DETAILS_SUCCESS,
            payload: data
        })
  
  }catch(error){
      dispatch({
          type:USER_DETAILS_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
  }
  }



export const updateUserProfile = (user)=> async(dispatch, getState)=>{
    try{
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        })
    
        const { userLogin:{userInfo}} = getState()
        const config = {
            headers: {
              "Content-Type": "application/json",
              token: `Bearer ${userInfo.token}`
            }
          };
    
          const {data} = await axios.put(`http://localhost:5000/profile`, user, config );
    
          dispatch({
              type:USER_UPDATE_PROFILE_SUCCESS,
              payload: data
          })
    
    }catch(error){
        dispatch({
            type:USER_UPDATE_PROFILE_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
    }
  


    export const getUserOrders = ()=> async(dispatch, getState)=>{
      try{
          dispatch({
              type: USER_ORDERS_REQUEST
          })
      
          const { userLogin:{userInfo}} = getState()
          const config = {
              headers: {
                "Content-Type": "application/json",
                token: `Bearer ${userInfo.token}`
              }
            };
      
            const {data} = await axios.get(`http://localhost:5000/user/orders`, config );
      
            dispatch({
                type:USER_ORDERS_SUCCESS,
                payload: data
            })
      
      }catch(error){
          dispatch({
              type:USER_ORDERS_FAIL,
              payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
            });
      }
      }
    