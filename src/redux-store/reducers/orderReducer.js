import * as actionTypes from '../actions/actionsTypes';


const initialState = {
    id:'',
    portraitName:'',
    portraitStyle:'',
    fullBody:false,
    portraitSize:'',
    image:'',
    comment:'no comment',

}


/// collect inputs values from order multi steps form
export const collectOrderDataReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.ORDER_COLLECT_DATA:
            return{ 
                ...state,
               ...action.payload,
            }

        
        default: return state;

    }

}

