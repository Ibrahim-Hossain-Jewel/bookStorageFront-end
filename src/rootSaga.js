import { spawn } from "redux-saga/effects";
import WelcomSaga from "./component/Welcome/welcomeSaga";
function* rootSaga () {
    yield spawn(WelcomSaga);
}
export default rootSaga;