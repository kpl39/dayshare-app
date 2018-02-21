import { combineReducers } from 'redux';
import ParentsReducer from './ParentsReducer';
import SearchReducer from './SearchReducer';
import AuthReducer from './AuthReducer';
import PictureReducer from './PictureReducer';
import MessageReducer from './MessageReducer';
import NavigationReducer from './NavigationReducer';
import CalendarReducer from './CalendarReducer';
import ChildrenReducer from './ChildrenReducer';

export default combineReducers({
    parents: ParentsReducer,
    search: SearchReducer,
    auth: AuthReducer,
    picture: PictureReducer,
    messages: MessageReducer,
    navigation: NavigationReducer,
    calendar: CalendarReducer,
    children: ChildrenReducer
});