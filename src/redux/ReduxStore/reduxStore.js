import {combineReducers, createStore} from "redux";
import profileReducer from "../profileReducer";
import messagesReducer from "../messagesReducer";

let reducersStore = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
});

let store = createStore(reducersStore);

window.store = store;

export default store;