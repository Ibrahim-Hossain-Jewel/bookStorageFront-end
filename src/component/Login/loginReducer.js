import {
    LOGINCREDENTIAL
} from "./constant";
import { fromJS } from "immutable";
//react immutable library for state container
const initialState = fromJS({
    isLoading : false,
});
export const loginReducer = (state = initialState, action)=>{
    switch (action.type) {
      case LOGINCREDENTIAL:
        return state.set("updateResponse", action.loginCredential);
      default:
        return state;
    }
}