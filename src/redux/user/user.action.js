
import { userType } from './usertype';
export const setCurrentUser = user => ({
    type: userType.SET_CURRENT_USER,
    payload: user
  });