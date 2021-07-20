import { combineReducers } from "redux";
import BatReducer from "./bat/batReducer";
import BallReducer from "./ball/ballReducer";

const rootReducer = combineReducers({
    ball: BallReducer,
    bat: BatReducer
})

export default rootReducer;
