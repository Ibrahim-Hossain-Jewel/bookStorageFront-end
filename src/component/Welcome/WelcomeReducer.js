import {
    PUBLICRESPONSEDATA
} from "./constant";
import { fromJS } from "immutable";
const initialState = fromJS({
    isLoading : false,
});
export const welcomReducer = (state = initialState, action)=>{
    console.log("reducer allpublicdata : " , action.publicData);
    switch (action.type) {
      case PUBLICRESPONSEDATA:
      return state.set("publicUsersData", action.publicData);
      default:
        return state;
    }
}