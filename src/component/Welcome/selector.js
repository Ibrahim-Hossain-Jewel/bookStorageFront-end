import { createSelector } from "reselect";
const WelcomeInfoModulesActivityLogDomain = (state) => state.welcomReducer;

const makeSelectAllPublicData = () =>
    createSelector(WelcomeInfoModulesActivityLogDomain, (substate) =>
    substate.get("publicUsersData"))

export{
    WelcomeInfoModulesActivityLogDomain,
    makeSelectAllPublicData
}
