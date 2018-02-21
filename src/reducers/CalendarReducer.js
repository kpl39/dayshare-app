import {
    GET_EVENTS_REQUESTED,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_ERROR,
    ADD_EVENT_TO_CALENDAR_REQUESTED,
    ADD_EVENT_TO_CALENDAR_SUCCESS,
    ADD_EVENT_TO_CALENDAR_ERROR,
    UPDATE_EVENT_START_DATE,
    UPDATE_EVENT_START_DATE_VISIBLE,
    UPDATE_EVENT_END_DATE,
    UPDATE_EVENT_END_DATE_VISIBLE,
    UPDATE_EVENT_TITLE,
    UPDATE_EVENT_DESCRIPTION,
    UPDATE_EVENT_REMINDER,
    UPDATE_EVENT_REMINDER_TIME,
    UPDATE_EVENT_REMINDER_TIME_TYPE,
    UPDATE_EVENT_PERSONAL,
    RESET_ADD_NEW_EVENT
} from '../actions/actions';
import _ from 'lodash';

const initialState = {
    events: {},
    loading: false,
    error: null,
    startDate: new Date(),
    endDate: new Date(),
    startDateVisible: false,
    endDateVisible: false,
    title: '',
    description: '',
    reminder: false,
    reminderTime: 10,
    reminderTimeType: 'minutes',
    personalEvent: false
}

function makeInitialDates() {
    const items = {};
    const d = new Date().getTime();

    for (let i = -5; i < 10; i++) {
        const time = d + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        items[strTime] = [];
    }
    console.log('intial Dates', items);
    return items;
}

function timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

export default function CalendarReducer(state = initialState, action) {
    switch(action.type) {
        case GET_EVENTS_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case GET_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                events: action.payload.events
            };
        case GET_EVENTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case ADD_EVENT_TO_CALENDAR_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case ADD_EVENT_TO_CALENDAR_SUCCESS:

            //make a copy of the new date's events array
            let newArray = state.events[action.payload.dateKey].slice();
            
            // gets the index position of the new event to use in splice 
            // existing dates are returned from db as string and need to be converted to date
            // objects to be compared to the new events start time 
            let index = _.sortedIndexBy(newArray, action.payload.event, (o) => {
                if (typeof o.startTime === 'string') {
                    return new Date(o.startTime);
                } else {
                    return o.startTime
                }
            } );

            newArray.splice(index, 0, action.payload.event);

            return {
                ...state,
                events: {
                    ...state.events,
                    [action.payload.dateKey]: newArray
                },
                loading: false
            }
        case ADD_EVENT_TO_CALENDAR_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case UPDATE_EVENT_START_DATE: 
            return {
                ...state,
                startDate: action.payload.startDate
            };
        case UPDATE_EVENT_START_DATE_VISIBLE: 
            return {
                ...state,
                startDateVisible: action.payload.visibility
            };
        case UPDATE_EVENT_END_DATE: 
            return {
                ...state,
                endDate: action.payload.endDate
            };
        case UPDATE_EVENT_END_DATE_VISIBLE: 
            return {
                ...state,
                endDateVisible: action.payload.visibility
            };
        case UPDATE_EVENT_TITLE: 
            return {
                ...state,
                title: action.payload.title
            };
        case UPDATE_EVENT_DESCRIPTION: 
            return {
                ...state,
                description: action.payload.description
            };
        case UPDATE_EVENT_REMINDER: 
            return {
                ...state,
                reminder: action.payload.reminder
            };
        case UPDATE_EVENT_REMINDER_TIME: 
            return {
                ...state,
                reminderTime: action.payload.reminderTime
            };
        case UPDATE_EVENT_REMINDER_TIME_TYPE: 
            return {
                ...state,
                reminderTimeType: action.payload.reminderTimeType
            };
        case UPDATE_EVENT_PERSONAL: 
            return {
                ...state,
                personalEvent: action.payload.personal
            };
        case RESET_ADD_NEW_EVENT: {
            return {
                ...state,
                startDate: new Date(),
                endDate: new Date(),
                startDateVisible: false,
                endDateVisible: false,
                title: '',
                description: '',
                reminder: false,
                reminderTime: 10,
                reminderTimeType: 'minutes',
                personalEvent: false
            }
        }
        default:
            return state;
    };
}