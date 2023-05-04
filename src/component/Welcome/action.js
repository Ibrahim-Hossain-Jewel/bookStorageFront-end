import { PUBLICRESPONSEDATA } from "./constant";
export function setAllPublicData(publicData) {
    console.log("public data from action : " , publicData);
    return{
        type: PUBLICRESPONSEDATA,
        publicData
    }
}
