import React from "react";
import {connect} from "react-redux";
import userReducer, {followAC, setUserAC, unFollowAC} from "../../redux/UserReducer";

let mapStateUser = (state) => {
    return {
        user: state.user.userReducer
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


export default connect(mapStateUser, mapDispatchUser)(userReducer)