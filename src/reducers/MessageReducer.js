import {
    CONNECT_SOCKET_REQUESTED,
    CONNECT_SOCKET_SUCCESS,
    CONNECT_SOCKET_ERROR,
    SUBSCRIBE_TO_SOCKET_REQUESTED,
    SUBSCRIBE_TO_SOCKET_SUCCESS,
    SUBSCRIBE_TO_SOCKET_ERROR,
    GET_COVERSATION_REQUESTED,
    GET_CONVERSATION_SUCCESS,
    GET_CONVERSATION_ERROR,
    MAKE_CONTACT_LIST_SUCCESS,
    MAKE_CONTACT_LIST_ERROR,
    UPDATE_CURRENT_CONTACT,
    UPDATE_CONVERSATION,
    UPDATE_KEYBOARD_VISIBILITY,
    UPDATE_NEW_MESSAGE,
    SEND_NEW_MESSAGE
} from '../actions/actions';

const initialState = {
    socket: {},
    currentConversationId: null,
    conversations: {
    },
    currentContact: {},
    contactList: [],
    contactListError: null,
    conversationLoading: false,
    conversationLoaded: false,
    conversationError: null,
    socketLoading: false,
    socketConnnected: false,
    client: {},
    socketError: null,
    subscriptionLoading: true,
    subscriptions: {},
    keyboardVisible: false,
    messageInProgress: ''
}

export default function MessageReducer(state = initialState, action) {
    switch(action.type) {
        case CONNECT_SOCKET_REQUESTED:
            return {
                ...state,
                socketLoading: true
            };
        case CONNECT_SOCKET_SUCCESS:
            return {
                ...state,
                socketLoading: false,
                client: action.payload.client,
                socketConnected: true
            };
        case CONNECT_SOCKET_ERROR:
            return {
                ...state,
                socketLoading: false,
                socketError: action.payload.error
            };
        case SUBSCRIBE_TO_SOCKET_REQUESTED:
            return {
                ...state,
                subscriptionLoading: true
            };
        case SUBSCRIBE_TO_SOCKET_SUCCESS:
            return {
                ...state,
                subscriptionLoading: false,
                subscriptions: {
                    ...state.subscriptions,
                    [action.payload.socketId]: action.payload.subscription
                }
            };
        case SUBSCRIBE_TO_SOCKET_ERROR:
            return {
                ...state,
                subscriptionLoading: false
            };
        case GET_COVERSATION_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case GET_CONVERSATION_SUCCESS:
            return {
                ...state,
                currentConversationId: action.payload.socketId,
                conversationLoading: false,
                conversationLoaded: true,
                conversations: {
                    ...state.conversations,
                    [action.payload.socketId]: action.payload.conversation
                }
            };
        case GET_CONVERSATION_ERROR:
            return {
                ...state,
                loading: false,
                conversationError: actions.payload.error
            };
        case UPDATE_CONVERSATION:
            return {
                ...state,
                conversations: {
                    ...state.conversations,
                    [action.payload.socketId]: state.conversations[action.payload.socketId].concat(action.payload.message) 
                }
            };
        case MAKE_CONTACT_LIST_SUCCESS:
            return {
                ...state,
                contactList: action.payload.contactList
            };
        case MAKE_CONTACT_LIST_ERROR:
            return {
                ...state,
                contactListError: action.payload.error
            };
        case UPDATE_CURRENT_CONTACT:
            return {
                ...state,
                currentContact: action.payload.contact
            };
        case UPDATE_KEYBOARD_VISIBILITY:
            return {
                ...state,
                keyboardVisible: action.payload.boolean
            };
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                messageInProgress: action.payload.message
            };
        default:
            return state;
    };
}