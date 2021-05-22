import * as actionTypes from '../actions/actionsTypes';


export const adminGetUsersReducer = (state = [], action)=>{
    switch(action.type){
        case actionTypes.ADMIN_GET_USERS_REQUEST:
            return{ loading: true }

        case actionTypes.ADMIN_GET_USERS_SUCCESS:
            return{  loading: false, users: action.payload}

        case actionTypes.ADMIN_GET_USERS_FAIL:
            return{ loading: false, error: action.payload }
            

        default: return state;

    }

}

export const adminDeleteUserReducer = (state = {}, action)=>{
    switch(action.type){
        case actionTypes.ADMIN_DELETE_USER_REQUEST:
            return{ loading: true }

        case actionTypes.ADMIN_DELETE_USER_SUCCESS:
            return{  loading: false, user: action.payload}

        case actionTypes.ADMIN_DELETE_USER_FAIL:
            return{ loading: false, error: action.payload }
            

        default: return state;

    }

}

