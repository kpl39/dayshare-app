import { 
    UPDATE_SEARCH_ADDRESS,
    UPDATE_COORDS,
    UPDATE_CHILD_AGE,
    UPDATE_AGE_RANGE,
    UPDATE_DISTANCE,
    SEARCH_PARENTS_REQUESTED,
    SEARCH_PARENTS_SUCCESS,
    SEARCH_PARENTS_ERROR
} from '../actions/actions';



const initialState = {
        address: '',
        latitude: 0,
        longitude: 0,
        childAge: 0,
        ageRange: 0,
        distance: 0,
        searchResults: {},
        isLoading: false,
        searchError: null
}

export default function SearchReducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_SEARCH_ADDRESS:
            console.log('update address action', action);
            return {
                ...state, 
                address: action.payload.address
            };
        case UPDATE_COORDS:
            return {
                ...state,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude
            };
        case UPDATE_CHILD_AGE:
            return {
                ...state,
                childAge: action.payload.childAge
            };
        case UPDATE_AGE_RANGE:
            return {
                ...state,
                ageRange: action.payload.ageRange
            };
        case UPDATE_DISTANCE:
            return {
                ...state,
                distance: action.payload.distance
            };
        case SEARCH_PARENTS_REQUESTED:
            return {
                ...state,
                isLoading: true
            };
        case SEARCH_PARENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                searchResults: action.payload.searchResults
            };
        case SEARCH_PARENTS_ERROR:
            return {
                ...state,
                isLoading: false,
                searchError: action.payload.error
            }
        default: 
            return state;
    }
}