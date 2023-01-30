const FOLLOW = 'ADD-POST';
const UNFOLLOW = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    users: [
        {
            id: 1, follow: false,name: 'Nelli', status: 'good', location: {
                city: 'Msk',
                country: 'Russia'
            }
        },
        {
            id: 2, follow: true, name: 'Vik', status: 'good', location: {
                city: 'Msk',
                country: 'Russia'
            }
        }
    ]
}
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:

        case UNFOLLOW:

        default:
            return state;

    }
}
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export default UserReducer;