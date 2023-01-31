import React from "react";
import {connect} from "react-redux";
import {Users} from "./users";
import {followAC, setUserAC, unFollowAC} from "../../redux/UserReducer";

let mapStateUser = (state) => {
    return {
        user: state.user.user
    }
}
let mapDispatchUser = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUser: (user) => {
            dispatch(setUserAC(user))
        }
    }
}


export default connect(mapStateUser, mapDispatchUser)(Users)