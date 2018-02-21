import { ActionConst } from 'react-native-router-flux';

const initialState = {
    scene: {}
};



export default function PictureReducer(state = initialState, {type, scene}) {
    switch(type) {
        case ActionConst.FOCUS:
            return {
                ...state, 
                scene
            };
        default: 
            return state;
    }
}