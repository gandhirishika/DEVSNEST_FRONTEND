import counter from "./counterReducer";
import counter2 from "./counterReducer2"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter,
    counter2
});
export default rootReducer;