import * as dayshareApi from '../api/dayShareApi';
import * as firebaseApi from '../api/FireBaseApi';

export const GET_PARENTS_REQUESTED = 'GET_PARENTS_REQUESTED';
export const GET_PARENTS_SUCCESS = 'GET_PARENTS_SUCCESS';
export const UPDATE_SEARCH_ADDRESS = 'UPDATE_SEARCH_ADDRESS';
export const UPDATE_COORDS = 'UPDATE_COORDS';
export const UPDATE_CHILD_AGE = 'UPDATE_CHILD_AGE';
export const UPDATE_AGE_RANGE = 'UPDATE_AGE_RANGE';
export const UPDATE_DISTANCE = 'UPDATE_DISTANCE';
export const SEARCH_PARENTS_REQUESTED = 'SEARCH_PARENTS_REQUESTED';
export const SEARCH_PARENTS_SUCCESS = 'SEARCH_PARENTS_SUCCESS';
export const SEARCH_PARENTS_ERROR = 'SEARCH_PARENTS_ERROR';
export const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';
export const FACEBOOK_LOGIN_REQUESTED = 'FACEBOOK_LOGIN_REQUESTED';
export const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS';
export const FACEBOOK_LOGIN_ERROR = 'FACEBOOK_LOGIN_ERROR';

export const GET_PARENT_BY_USERID_REQUESTED = 'GET_PARENT_BY_USERID_REQUESTED';
export const GET_PARENT_BY_USERID_SUCCESS = 'GET_PARENT_BY_USERID_SUCCESS';
export const GET_PARENT_BY_USERID_ERROR = 'GET_PARENT_BY_USERID_ERROR';

export const GET_PARENT_BY_PARENT_ID_REQUESTED = 'GET_PARENT_BY_PARENT_ID_REQUESTED';
export const GET_PARENT_BY_PARENT_ID_SUCCESS = 'GET_PARENT_BY_PARENT_ID_SUCCESS';
export const GET_PARENT_BY_PARENT_ID_ERROR = 'GET_PARENT_BY_PARENT_ID_ERROR';

export const GET_CHILDREN_FROM_PROFILE = 'GET_CHILDREN_FROM_PROFILE';
export const CHANGE_ACTIVE_CHILD = 'CHANGE_ACTIVE_CHILD';
export const UPDATE_CHILD_VALUE = 'UPDATE_CHILD_VALUE';

export const GET_CHILD_METADATA_CATEGORIES_REQUESTED = 'GET_CHILD_METADATA_CATEGORIES_REQUESTED';
export const GET_CHILD_METADATA_CATEGORIES_SUCCESS = 'GET_CHILD_METADATA_CATEGORIES_SUCCESS';
export const GET_CHILD_METADATA_CATEGORIES_ERROR = 'GET_CHILD_METADATA_CATEGORIES_ERROR';

export const UPDATE_CHILD_META_INFO_REQUESTED = 'UPDATE_CHILD_META_INFO_REQUESTED';
export const UPDATE_CHILD_META_INFO_SUCCESS = 'UPDATE_CHILD_META_INFO_SUCCESS';
export const UPDATE_CHILD_META_INFO_ERROR = 'UPDATE_CHILD_META_INFO_ERROR';

export const GET_AUTH_STATE_REQUESTED = 'GET_AUTH_STATE_REQUESTED';
export const GET_AUTH_STATE_SUCCESS = 'GET_AUTH_STATE_SUCCESS';
export const GET_AUTH_STATE_ERROR = 'GET_AUTH_STATE_ERROR';

export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_ADDRESS_1 = 'UPDATE_ADDRESS_1';
export const UPDATE_ADDRESS_2 = 'UPDATE_ADDRESS_2';
export const UPDATE_CITY = 'UPDATE_CITY';
export const UPDATE_STATE = 'UPDATE_STATE';
export const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';
export const UPDATE_PROFILE_IMAGE = 'UPDATE_PROFILE_IMAGE';


export const TAKE_PROFILE_PICTURE = 'TAKE_PROFILE_PICTURE';
export const CONVERT_PROFILE_TO_BASE64 = 'CONVERT_PROFILE_TO_BASE64';


export const CONNECT_SOCKET_REQUESTED = 'CONNECT_SOCKET_REQUESTED';
export const CONNECT_SOCKET_SUCCESS = 'CONNECT_SOCKET_SUCCESS';
export const CONNECT_SOCKET_ERROR = 'CONNECT_SOCKET_ERROR';

// export const UPDATE_CURRENT_CONTACT = 'UPDATE_CURRENT_CONTACT';

export const SUBSCRIBE_TO_SOCKET_REQUESTED = 'SUBSCRIBE_TO_SOCKET_REQUESTED';
export const SUBSCRIBE_TO_SOCKET_SUCCESS = 'SUBSCRIBE_TO_SOCKET_SUCCESS';
export const SUBSCRIBE_TO_SOCKET_ERROR = 'SUBSCRIBE_TO_SOCKET_ERROR';

export const GET_CONVERSATION_REQUESTED = 'GET_CONVERSATION_REQUESTED';
export const GET_CONVERSATION_SUCCESS = 'GET_CONVERSATION_SUCCESS';
export const GET_CONVERSATION_ERROR = 'GET_CONVERSATION_ERROR';
export const UPDATE_CONVERSATION = 'UPDATE_CONVERSATION';

export const MAKE_CONTACT_LIST_SUCCESS = 'MAKE_CONTACT_LIST_SUCCESS';
export const MAKE_CONTACT_LIST_ERROR = 'MAKE_CONTACT_LIST_ERROR';

export const UPDATE_CURRENT_CONTACT = 'UPDATE_CURRENT_CONTACT';

export const UPDATE_KEYBOARD_VISIBILITY = 'UPDATE_KEYBOARD_VISIBILITY';
export const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

export const GET_EVENTS_REQUESTED = 'GET_EVENTS_REQUESTED';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_ERROR = 'GET_EVENTS_ERROR';

export const ADD_EVENT_TO_CALENDAR_REQUESTED = 'ADD_EVENT_TO_CALENDAR_REQUESTED';
export const ADD_EVENT_TO_CALENDAR_SUCCESS = 'ADD_EVENT_TO_CALENDAR_SUCCESS';
export const ADD_EVENT_TO_CALENDAR_ERROR = 'ADD_EVENT_TO_CALENDAR_ERROR';

export const UPDATE_EVENT_START_DATE = 'UPDATE_EVENT_START_DATE';
export const UPDATE_EVENT_END_DATE = 'UPDATE_EVENT_END_DATE';
export const UPDATE_EVENT_START_DATE_VISIBLE = 'UPDATE_EVENT_START_DATE_VISIBLE';
export const UPDATE_EVENT_END_DATE_VISIBLE = 'UPDATE_EVENT_END_DATE_VISIBLE';
export const UPDATE_EVENT_TITLE = 'UPDATE_EVENT_TITLE';
export const UPDATE_EVENT_DESCRIPTION = 'UPDATE_EVENT_DESCRIPTION';
export const UPDATE_EVENT_REMINDER = 'UPDATE_EVENT_REMINDER';
export const UPDATE_EVENT_REMINDER_TIME = 'UPDATE_EVENT_REMINDER_TIME';
export const UPDATE_EVENT_REMINDER_TIME_TYPE = 'UPDATE_EVENT_REMINDER_TIME_TYPE';
export const UPDATE_EVENT_PERSONAL = 'UPDATE_EVENT_PERSONAL';
export const RESET_ADD_NEW_EVENT = 'RESET_ADD_NEW_EVENT';

export function searchParents(pkg) {
        return (dispatch) => {
            dayshareApi.searchParents(pkg)
            .then((results) => {
                dispatch(searchParentsSuccess(results));
            }).catch((err) => {
                dispatch(searchParentsError(err));
            })
        }
}

export const searchParentsRequested = () => {
    return {
        type: SEARCH_PARENTS_REQUESTED
    };
};

export const searchParentsSuccess = (searchResults) => {
    return {
        type: SEARCH_PARENTS_SUCCESS,
        payload: {searchResults}
    };
};

export const searchParentsError = (error) => {
    return {
        type: SEARCH_PARENTS_ERROR,
        payload: {error}
    };
};

export function updateSearchAddress(address) {
    return {
        type: UPDATE_SEARCH_ADDRESS,
        payload: {address}
    };
};

export const updateCoords = (latitude, longitude) => {
    return {
        type: UPDATE_COORDS,
        payload: {latitude, longitude}
    }
}

export const updateChildAge = (childAge) => {
    return {
        type: UPDATE_CHILD_AGE,
        payload: {childAge}
    };
};

export const updateAgeRange = (ageRange) => {
    return {
        type: UPDATE_AGE_RANGE,
        payload: {ageRange}
    };
};

export const updateDistance = (distance) => {
    return {
        type: UPDATE_DISTANCE,
        payload: {distance}
    };
};

export const facebookLogin = () => {
    return (dispatch) => {
        firebaseApi.facebookLogin()
        .then((credentials) => {
            dispatch(facebookLoginSuccess(credentials._user))
        })
        .catch((err) => {
            dispatch(facebookLoginError(err));
        })
    }
}

export const facebookLoginRequested = () => {
    return {
        type: FACEBOOK_LOGIN_REQUESTED
    };
    
}

export const facebookLoginSuccess = (credentials) => {
    return {
        type: FACEBOOK_LOGIN_SUCCESS,
        payload: {credentials}
    };
}

export const facebookLoginError = (error) => {
    return {
        type: FACEBOOK_LOGIN_ERROR,
        payload: {error}
    };
};

export const getParentByUserid = (userid) => {
    console.log('parents by user id fn', userid);
    return (dispatch) => {
        dispatch(getParentByUseridRequested());
        dayshareApi.getParentProfileByUserId(userid)
            .then((response) => {
                let parent = response.data._embedded.parents[0];
                console.log('profile returned', response.data);
                dispatch(getParentByUseridSuccess(parent));
                dispatch(makeContactList(parent.sockets, parent.parentId));
                dispatch(connectSocket());
                dispatch(getEventsByGroupId(parent.groups[0].groupId, parent.parentId));
                dispatch(getChildrenFromProfile(parent.children));
            }).catch((err) => {
                dispatch(getParentByUseridError(err));
            })
    }
}


export const getParentByUseridRequested = () => {
    console.log('parents by userid requested');
    return {
        type: GET_PARENT_BY_USERID_REQUESTED
    };
    
}

export const getParentByUseridSuccess = (profile) => {
    return {
        type: GET_PARENT_BY_USERID_SUCCESS,
        payload: {profile}
    };
}

export const getParentByUseridError = (error) => {
    return {
        type: GET_PARENT_BY_USERID_ERROR,
        payload: {error}
    };
};

export const getParentByParentId = (parentId) => {
    return (dispatch) => {
        dispatch(getParentByParentIdRequested());
        dayshareApi.getParentProfileByParentId(parentId)
            .then((response) => {
                let parent = response.data;
                console.log('profile returned', response.data);
                dispatch(getParentByParentIdSuccess(parent));
            }).catch((err) => {
                dispatch(getParentByParentIdError(err));
            })
    }
}


export const getParentByParentIdRequested = () => {
    console.log('parents by parentid requested');
    return {
        type: GET_PARENT_BY_PARENT_ID_REQUESTED
    };
    
}

export const getParentByParentIdSuccess = (profile) => {
    return {
        type: GET_PARENT_BY_PARENT_ID_SUCCESS,
        payload: {profile}
    };
}

export const getParentByParentIdError = (error) => {
    return {
        type: GET_PARENT_BY_PARENT_ID_ERROR,
        payload: {error}
    };
};

export const getChildrenFromProfile = (children) => {
    children[0].active = true;
    return {
        type: GET_CHILDREN_FROM_PROFILE,
        payload: {children}
    };
};

export const changeActiveChild = (child, index) => {
    return {
        type: CHANGE_ACTIVE_CHILD,
        payload: {child, index}
    };
};

export const updateChildValue = (value, propertyName, index) => {
    return {
        type: UPDATE_CHILD_VALUE,
        payload: {value, propertyName, index}
    };
};

export const getAuthState = () => {
    return (dispatch) => {
        firebaseApi.getAuthState()
        .then((credentials) => {
            if (credentials._user) {
                dispatch(getAuthStateSuccess(credentials._user));
                dispatch(getParentByUserid(credentials._user.uid));
            }
            
        })
        .catch((err) => {
            dispatch(getAuthStateError(err));
        })
    }
}

export const getAuthStateRequested = () => {
    return {
        type: GET_AUTH_STATE_REQUESTED
    };
    
}

export const getAuthStateSuccess = (credentials) => {
    return {
        type: GET_AUTH_STATE_SUCCESS,
        payload: {credentials}
    };
}

export const getAuthStateError = (error) => {
    return {
        type: GET_AUTH_STATE_ERROR,
        payload: {error}
    };
};

export function updateUsername(username) {
    return {
        type: UPDATE_USERNAME,
        payload: {username}
    };
};

export function updateEmail(email) {
    return {
        type: UPDATE_EMAIL,
        payload: {email}
    };
};

export function updateFirstName(firstName) {
    return {
        type: UPDATE_FIRST_NAME,
        payload: {firstName}
    };
};

export function updateLastName(lastName) {
    return {
        type: UPDATE_LAST_NAME,
        payload: {lastName}
    };
};

export function updateAddress1(address1) {
    return {
        type: UPDATE_ADDRESS_1,
        payload: {address1}
    };
};

export function updateAddress2(address2) {
    return {
        type: UPDATE_ADDRESS_2,
        payload: {address2}
    };
};

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: {city}
    };
};

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: {state}
    };
};

export function updateZipcode(zipcode) {
    return {
        type: UPDATE_ZIPCODE,
        payload: {zipcode}
    };
};

export function updateProfileImage(profileImage) {
    return {
        type: UPDATE_PROFILE_IMAGE,
        payload: {profileImage}
    };
};

export const takeProfilePicture = (path) => {
    return {
        type: TAKE_PROFILE_PICTURE,
        payload: {path}
    };
};

export const convertProfileToBase64 = (base64) => {
    return {
        type: CONVERT_PROFILE_TO_BASE64,
        payload: {base64}
    };
};

export const connectSocket = () => {
    return (dispatch) => {
        dispatch(connectSocketRequested());
        dayshareApi.connectSocket()
            .then((client) => {
                dispatch(connectSocketSuccess(client));
                // dispatch(subscribeToSocket(client, 2));
            })
            .catch((error) => {
                dispatch(connectSocketError(error))
            })
    }
}

export const connectSocketRequested = () => {
    return {
        type: CONNECT_SOCKET_REQUESTED
    };
};

export const connectSocketSuccess = (client) => {
    return {
        type: CONNECT_SOCKET_SUCCESS,
        payload: {client}
    };
};

export const connectSocketError = (error) => {
    return {
        type: CONNECT_SOCKET_ERROR,
        payload: {error}
    };
};

// export const updateCurrentContact = (parentId) => {
//     return {
//         type: UPDATE_CURRENT_CONTACT,
//         payload: {parentId}
//     };
// };

export const subscribeToSocket = (client, socketId) => {
    return (dispatch) => {
        dayshareApi.subscribeToSocket(client, socketId)
            .then((subscription) => {
                dispatch(subscribeToSocketSuccess(socketId, subscription))
            })
            .catch((error) => {
                dispatch(subscribeToSocketError(error))
            });
    };
};

export const subscribeToSocketRequested = () => {
    return {
        type: SUBSCRIBE_TO_SOCKET_REQUESTED
    };
};

export const subscribeToSocketSuccess = (socketId, subscription) => {
    return {
        type: SUBSCRIBE_TO_SOCKET_SUCCESS,
        payload: {socketId, subscription}
    };
};

export const subscribeToSocketError = (error) => {
    return {
        type: SUBSCRIBE_TO_SOCKET_ERROR,
        payload: {error}
    };
};


export const getConversation = (primary, secondary, socketId) => {
    console.log('GET CONVERSATION SOCKET ID', socketId)
    return (dispatch) => {
        dayshareApi.getConversation(primary, secondary)
        .then((conversation) => {
            dispatch(getConversationSuccess(conversation, socketId))
        })
        .catch((err) => {
            dispatch(getConversationError(err));
        })
    }
}

export const getConversationRequested = () => {
    return {
        type: GET_CONVERSATION_REQUESTED
    };
    
}

export const getConversationSuccess = (conversation, socketId) => {
    console.log('GET CONVERSATION SUCCESS SOCKET ID', socketId);
    return {
        type: GET_CONVERSATION_SUCCESS,
        payload: {conversation, socketId}
    };
}

export const getConversationError = (error) => {
    return {
        type: GET_CONVERSATION_ERROR,
        payload: {error}
    };
};

export const updateConversation = (message, socketId) => {
    return {
        type: UPDATE_CONVERSATION,
        payload: {message, socketId}
    };
}

export const makeContactList = (sockets, parentId) => {
    return (dispatch) => {
        dayshareApi.makeContactList(sockets, parentId)
            .then((contactList) => {
                if (contactList.length > 0) {
                    dispatch(updateCurrentContact(contactList[0]));
                };
                dispatch(makeContactListSuccess(contactList));
            })
            .catch((error) => {
                dispatch(makeContactListError(error))
            });
    };
};

export const makeContactListSuccess = (contactList) => {
    return {
        type: MAKE_CONTACT_LIST_SUCCESS,
        payload: {contactList}
    };
};

export const makeContactListError = (error) => {
    return {
        type: MAKE_CONTACT_LIST_ERROR,
        payload: {error}
    };
};

export const updateCurrentContact = (contact) => {
    return {
        type: UPDATE_CURRENT_CONTACT,
        payload: {contact}
    }
}

export const updateKeyboardVisibility = (boolean) => {
    return {
        type: UPDATE_KEYBOARD_VISIBILITY,
        payload: {boolean}
    };
};

export const updateNewMessage = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        payload: {message}
    };
}

// export const sendNewMessage = (message) => {
//     return {
//         type: SEND_NEW_MESSAGE,
//         payload: { message }
//     };
// };


export const getEventsByGroupId = (groupId, parentId) => {
    return (dispatch) => {
        dispatch(getEventsByGroupIdRequested());
        dayshareApi.getEventsByGroupId(groupId, parentId)
            .then((events) => {
                dispatch(getEventsByGroupIdSuccess(events));
            }).catch((err) => {
                dispatch(getEventsByGroupIdError(err));
            })
    }
}


export const getEventsByGroupIdRequested = () => {
    return {
        type: GET_EVENTS_REQUESTED
    };
    
}

export const getEventsByGroupIdSuccess = (events) => {
    return {
        type: GET_EVENTS_SUCCESS,
        payload: {events}
    };
}

export const getEventsByGroupIdError = (error) => {
    return {
        type: GET_EVENTS_ERROR,
        payload: {error}
    };
};

export const addEventToCalendar = (dateKey, event) => {
    return (dispatch) => {
        dispatch(addEventToCalendarRequested());
        dayshareApi.addEventToCalendar(event)
            .then((events) => {
                dispatch(addEventToCalendarSuccess(dateKey, event));
            }).catch((err) => {
                dispatch(addEventToCalendarError(err));
            })
    }
} 

export const addEventToCalendarRequested = () => {
    return {
        type: ADD_EVENT_TO_CALENDAR_REQUESTED
    }
}

export const addEventToCalendarSuccess = (dateKey, event) => {
    return {
        type: ADD_EVENT_TO_CALENDAR_SUCCESS,
        payload: {dateKey, event}
    }
}

export const addEventToCalendarError = (error) => {
    return {
        type: ADD_EVENT_TO_CALENDAR_ERROR,
        payload: {error}
    }
}

export const updateEventStartDate = (startDate) => {
    return {
        type: UPDATE_EVENT_START_DATE,
        payload: {startDate}
    }
}

export const updateEventEndDate = (endDate) => {
    return {
        type: UPDATE_EVENT_END_DATE,
        payload: {endDate}
    }
}

export const updateEventStartDateVisible = (visibility) => {
    return {
        type: UPDATE_EVENT_START_DATE_VISIBLE,
        payload: {visibility}
    }
}

export const updateEventEndDateVisible = (visibility) => {
    return {
        type: UPDATE_EVENT_END_DATE_VISIBLE,
        payload: {visibility}
    }
}

export const updateEventTitle = (title) => {
    return {
        type: UPDATE_EVENT_TITLE,
        payload: {title}
    }
}

export const updateEventDescription = (description) => {
    return {
        type: UPDATE_EVENT_DESCRIPTION,
        payload: {description}
    }
}

export const updateEventReminder = (reminder) => {
    return {
        type: UPDATE_EVENT_REMINDER,
        payload: {reminder}
    }
}

export const updateEventReminderTime = (reminderTime) => {
    return {
        type: UPDATE_EVENT_REMINDER_TIME,
        payload: {reminderTime}
    }
}

export const updateEventReminderTimeType = (reminderTimeType) => {
    return {
        type: UPDATE_EVENT_REMINDER_TIME_TYPE,
        payload: {reminderTimeType}
    }
}

export const updateEventPersonal = (personal) => {
    return {
        type: UPDATE_EVENT_PERSONAL,
        payload: {personal}
    }
}

export const resetAddNewEvent = () => {
    return {
        type: RESET_ADD_NEW_EVENT
    }
}


export const getChildMetadataCategories = () => {
    return (dispatch) => {
        dispatch(getChildMetadataCategoriesRequested());
        dayshareApi.getMetadataCategories()
            .then((categories) => {
                dispatch(getChildMetadataCategoriesSuccess(categories));
            })
            .catch((err) => {
                dispatch(getChildMetadataCategoriesError(err));
            });
    };
};

export const getChildMetadataCategoriesRequested = () => {
    return {
        type: GET_CHILD_METADATA_CATEGORIES_REQUESTED
    }
}

export const getChildMetadataCategoriesSuccess = (categories) => {
    return {
        type: GET_CHILD_METADATA_CATEGORIES_SUCCESS,
        payload: {categories}
    }
}

export const getChildMetadataCategoriesError = (error) => {
    return {
        type: GET_CHILD_METADATA_CATEGORIES_ERROR,
        payload: {error}
    }
}

export const updateChildMetadata = (pkg, childIndex) => {
    return (dispatch) => {
        dispatch(updateChildMetadataRequested());
        dayshareApi.updateChildMetadata(pkg)
            .then((res) => {
                dispatch(updateChildMetadataSuccess(pkg, childIndex));
            })
            .catch((err) => {
                dispatch(updateChildMetadataError(err));
            });
    };
};


export const updateChildMetadataRequested = () => {
    return {
        type: UPDATE_CHILD_META_INFO_REQUESTED,
    }
}


export const updateChildMetadataSuccess = (pkg, childIndex) => {
    return {
        type: UPDATE_CHILD_META_INFO_SUCCESS,
        payload: {pkg, childIndex}
    }
}

export const updateChildMetadataError = (error) => {
    return {
        type: UPDATE_CHILD_META_INFO_ERROR,
        payload: {error}
    }
}