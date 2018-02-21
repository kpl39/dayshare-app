import { 
    GET_PARENT_BY_PARENT_ID_REQUESTED,
    GET_PARENT_BY_PARENT_ID_SUCCESS,
    GET_PARENT_BY_PARENT_ID_ERROR
} from '../actions/actions';

const initialState = {
    activeParentProfile: {},
    loading: false,
    error: null
};

export default function ParentsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_PARENT_BY_PARENT_ID_REQUESTED:
            return {
                ...state, 
                loading: true
            };

        case GET_PARENT_BY_PARENT_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                activeParentProfile: action.payload.profile
            };
        case GET_PARENT_BY_PARENT_ID_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default: 
            return state;
    }
}