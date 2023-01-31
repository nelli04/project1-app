import {combineReducers, createStore} from "redux";
import profileReducer from "../profileReducer";
import messagesReducer from "../messagesReducer";
import {userReducer} from "../UserReducer";


let reducersStore = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    user: userReducer
});

let store = createStore(reducersStore);

window.store = store;

export default store;