import {
  REGISTRATIONDATA
} from "./constant";
//general action that catch value from user.
export const setDeleteInvisible = (registrationInfo)=>{
  return {
    // type: DELETE_INVISIBLE,
    payload: registrationInfo
  };
}