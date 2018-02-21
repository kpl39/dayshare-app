import {
    FACEBOOK_LOGIN_REQUESTED,
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_ERROR,
    GET_PARENT_BY_USERID_REQUESTED,
    GET_PARENT_BY_USERID_SUCCESS,
    GET_PARENT_BY_USERID_ERROR,
    GET_AUTH_STATE_REQUESTED,
    GET_AUTH_STATE_SUCCESS,
    GET_AUTH_STATE_ERROR,
    UPDATE_USERNAME,
    UPDATE_EMAIL,
    UPDATE_FIRST_NAME,
    UPDATE_LAST_NAME,
    UPDATE_ADDRESS_1,
    UPDATE_ADDRESS_2,
    UPDATE_CITY,
    UPDATE_STATE,
    UPDATE_ZIPCODE,
    UPDATE_PROFILE_IMAGE,
    // TAKE_PROFILE_PICTURE,
    CONVERT_PROFILE_TO_BASE64
} from '../actions/actions';



const initialState = {
    firebaseCredentials: {},
    profile: {},
    authenticated: false,
    profileLoaded: false,
    authError: null,
    profileError: null
}

export default function AuthReducer(state = initialState, action) {
    switch(action.type) {
        case FACEBOOK_LOGIN_REQUESTED:
            return {
                ...state,
                authenticated: false
            };
        case FACEBOOK_LOGIN_SUCCESS:
            return {
                ...state,
                firebaseCredentials: action.payload.credentials,
                authenticated: true
            };
        case FACEBOOK_LOGIN_ERROR:
            return {
                ...state,
                authError: action.payload.error,
                authenticated: false
            };
        case GET_PARENT_BY_USERID_REQUESTED:
            return {
                ...state,
                profileLoaded: false
            };
        case GET_PARENT_BY_USERID_SUCCESS:
            return {
                ...state,
                profile: action.payload.profile,
                profileLoaded: true
            };
        case GET_PARENT_BY_USERID_ERROR:
            return {
                ...state,
                profileError: action.payload.error,
                profileLoaded: false
            };
        case GET_AUTH_STATE_REQUESTED:
            return {
                ...state,
                authenticated: false
            };
        case GET_AUTH_STATE_SUCCESS:
            return {
                ...state,
                firebaseCredentials: action.payload.credentials,
                authenticated: true
            };
        case GET_AUTH_STATE_ERROR:
            return {
                ...state,
                authError: action.payload.error,
                authenticated: false
            };
        case UPDATE_USERNAME:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    username: action.payload.username
                }
            };
        case UPDATE_EMAIL:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    email: action.payload.email
                }
            };
        case UPDATE_FIRST_NAME:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    firstName: action.payload.firstName
                }
            };
        case UPDATE_LAST_NAME:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    lastName: action.payload.lastName
                }
            };
        case UPDATE_ADDRESS_1:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    address1: action.payload.address1
                }
            };
        case UPDATE_ADDRESS_2:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    address2: action.payload.address2
                }
            };
        case UPDATE_CITY:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    city: action.payload.city
                }
            };
        case UPDATE_STATE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    state: action.payload.state
                }
            };
        case UPDATE_ZIPCODE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    zipcode: action.payload.zipcode
                }
            };
        // case TAKE_PROFILE_PICTURE:
        //     return {
        //         ...state,
        //         profile: {
        //             ...state.profile,
        //             profilePath: action.payload.path
        //         }
                
        //     };
        case CONVERT_PROFILE_TO_BASE64:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    profileImageUrl: action.payload.base64
                }
            };
        default: 
            return state;
    }
}


    // UPDATE_FIRST_NAME,
    // UPDATE_LAST_NAME,
    // UPDATE_ADDRESS_1,
    // UPDATE_ADDRESS_2,
    // UPDATE_CITY,
    // UPDATE_STATE,
    // UPDATE_ZIPCODE,
    // UPDATE_PROFILE_IMAGE