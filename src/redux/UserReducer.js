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
        default:
            return state;

    }
}
export const followAC = () => ({type: FOLLOW})
export const unFollowAC = (text) => ({
    type: UNFOLLOW, newText: text
})
export default UserReducer;