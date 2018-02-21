// import {

//     GET_PARENT_BY_USERID_REQUESTED,
//     GET_PARENT_BY_USERID_SUCCESS,
//     GET_PARENT_BY_USERID_ERROR,

//     UPDATE_USERNAME,
//     UPDATE_EMAIL,
//     UPDATE_FIRST_NAME,
//     UPDATE_LAST_NAME,
//     UPDATE_ADDRESS_1,
//     UPDATE_ADDRESS_2,
//     UPDATE_CITY,
//     UPDATE_STATE,
//     UPDATE_ZIPCODE,
//     UPDATE_PROFILE_IMAGE
// } from '../actions/actions';


// const initialState = {

// };


// export default function AuthReducer(state = initialState, action) {
//     switch(action.type) {
//         case GET_PARENT_BY_USERID_REQUESTED:
//             return {
//                 ...state,
//                 profileLoaded: false
//             };
//         case GET_PARENT_BY_USERID_SUCCESS:
//             return {
//                 ...state,
//                 profile: action.payload.profile,
//                 profileLoaded: true
//             };
//         case GET_PARENT_BY_USERID_ERROR:
//             return {
//                 ...state,
//                 profileError: action.payload.error,
//                 profileLoaded: false
//             };
//     }