
import { userType } from './usertype';
const initialstate=
    { 
     currentUser:null
    
    };
 const userReducer =(state =initialstate, action) =>
 {
    switch(action.type)
    {
        case userType.SET_CURRENT_USER:
            return {
              ...state,
              currentUser: action.payload
            };
        default:
            return state;
    }

 }

 
export default userReducer;
