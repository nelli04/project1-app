const FOLLOW = 'ADD-POST';
const UNFOLLOW = 'UPDATE-NEW-POST-TEXT';
const SET_USER = 'SET_USER';

let initialState = {
    user: [
         {
             id: 1, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_BQOnSIsrT787voKtwIyCQv1xUMU_C1Jig&usqp=CAU', follow: false, name: 'Nelli', status: 'good', location: {
                 city: 'Msk',
                 country: 'Russia'
             }
         },
         {
             id: 2, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_BQOnSIsrT787voKtwIyCQv1xUMU_C1Jig&usqp=CAU', follow: true, name: 'Vik', status: 'good', location: {
                 city: 'Msk',
                 country: 'Russia'
             }
         }
    ]
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                user: state.user.map(el => {
                    if (el.id === action.userId) {
                        return {...el, follow: true}
                    }
                    return el;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                user: state.user.map(el => {
                    if (el.id === action.userId) {
                        return {...el, follow: false}
                    }
                    return el;
                })
            }

        case SET_USER:
            return {
                ...state,
                user: {...state.user, ...action.user}
            }
        default:
            return state;

    }
}
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUserAC = (user) => ({type: SET_USER, user})