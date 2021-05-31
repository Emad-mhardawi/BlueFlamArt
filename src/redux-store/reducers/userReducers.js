import * as actionTypes from '../actions/actionsTypes';

const initialState = {}


export const userLoginReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.USER_LOGIN_REQUEST:
            return{ loading: true }

        case actionTypes.USER_LOGIN_SUCCESS:
            return{  loading: false, userInfo: action.payload}

        case actionTypes.USER_LOGIN_FAIL:
            return{ loading: false, error: action.payload }

        case actionTypes.USER_LOGOUT:
            return{ }
            
        
        default: return state;

    }

}


export const userRegisterReducer = (state = {userInfo:{username:''}}, action)=>{
    switch(action.type){
        case actionTypes.USER_REGISTER_REQUEST:
            return{ loading: true }

        case actionTypes.USER_REGISTER_SUCCESS:
            return{  loading: false, userInfo: action.payload}

        case actionTypes.USER_REGISTER_FAIL:
            return{ loading: false, error: action.payload }

        default: return state;

    }

}


export const userDetailsReducer = (state ={user:{}}, action)=>{
    switch(action.type){
        case actionTypes.USER_DETAILS_REQUEST:
            return{ ...state, loading: true }

        case actionTypes.USER_DETAILS_SUCCESS:
            return{  loading: false, user: action.payload}

        case actionTypes.USER_DETAILS_FAIL:
            return{   ...state, loading: false, error: action.payload }

        default: return state;

    }

}


export const userUpdateProfileReducer = (state ={}, action)=>{
    switch(action.type){
        case actionTypes.USER_UPDATE_PROFILE_REQUEST:
            return{ loading: true }

        case actionTypes.USER_UPDATE_PROFILE_SUCCESS:
            return{  loading: false, success:true, userInfo: action.payload}

        case actionTypes.USER_UPDATE_PROFILE_FAIL:
            return{ loading: false, error: action.payload }

            case actionTypes.USER_UPDATE_PROFILE_RESET:
            return{ loading: false, error: action.payload }

        default: return state;

    }

}


export const userOrdersReducer = (state ={orders:[]}, action)=>{
    switch(action.type){
        case actionTypes.USER_ORDERS_REQUEST:
            return{ loading: true }

        case actionTypes.USER_ORDERS_SUCCESS:
            return{  loading: false,  orders: action.payload}

        case actionTypes.USER_ORDERS_FAIL:
            return{ loading: false, error: action.payload }

        default: return state;

    }

}