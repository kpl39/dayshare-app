import { 
    TAKE_PROFILE_PICTURE,
    // CONVERT_PROFILE_TO_BASE64
} from '../actions/actions';

const initialState = {
    profilePath: '',
    // profileBase64: ''
};



export default function PictureReducer(state = initialState, action) {
    switch(action.type) {
        case TAKE_PROFILE_PICTURE:
            return {
                ...state, 
                profilePath: action.payload.path
            };

        // case CONVERT_PROFILE_TO_BASE64:
        //     return {
        //         ...state,
        //        profileBase64: action.payload.base64
        //     };
        default: 
            return state;
    }
}