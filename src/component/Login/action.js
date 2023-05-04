import {
  LOGINCREDENTIAL
} from "./constant";
export const setloginCredential = (loginCredential)=>{
  return {
    type: LOGINCREDENTIAL,
    loginCredential,
  };
}