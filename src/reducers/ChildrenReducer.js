import { 
    GET_CHILDREN_FROM_PROFILE,
    CHANGE_ACTIVE_CHILD,
    UPDATE_CHILD_VALUE,
    GET_CHILD_METADATA_CATEGORIES_REQUESTED,
    GET_CHILD_METADATA_CATEGORIES_SUCCESS,
    GET_CHILD_METADATA_CATEGORIES_ERROR,
    UPDATE_CHILD_META_INFO_REQUESTED,
    UPDATE_CHILD_META_INFO_SUCCESS,
    UPDATE_CHILD_META_INFO_ERROR
} from '../actions/actions';

const initialState = {
    activeChild: {},
    activeChildIndex: 0,
    children: [],
    categoriesLoading: false,
    metadataCategories: [],
    getCategoriesError: null,
    metaUpdateInProcess: false,
    metaUpdateError: null
};

export default function ChildrenReducer(state = initialState, action) {
    switch(action.type) {
        case GET_CHILDREN_FROM_PROFILE:
            const activeChild = action.payload.children[0] || null;

            return {
                ...state, 
                children: action.payload.children,
                activeChild: activeChild
            };
        case CHANGE_ACTIVE_CHILD:
            let newChildren = state.children.slice();
            let cH = newChildren.map((child, index) => {
                    if (index === action.payload.index) {
                        child.active = true;
                        return child;
                    } else {
                        child.active = false;
                        return child;
                    }
            })

            return {
                ...state,
                activeChild: action.payload.child,
                activeChildIndex: action.payload.index,
                children: cH
            };
        case UPDATE_CHILD_VALUE:
            return {
                ...state,
                children: state.children.map((child, index) => {
                    if(index === action.payload.index) {
                        return {
                            ...child,
                            [action.payload.propertyName]: action.payload.value
                        };
                    };
                    return child;
                })
            };
        case GET_CHILD_METADATA_CATEGORIES_REQUESTED:
            return {
                ...state,
                categoriesLoading: true
            };
        case GET_CHILD_METADATA_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoriesLoading: false,
                metadataCategories: action.payload.categories
            };
        case GET_CHILD_METADATA_CATEGORIES_ERROR:
            return {
                ...state,
                categoriesLoading: false,
                getCategoriesError: action.payload.error
            }
        case UPDATE_CHILD_META_INFO_REQUESTED:
            return {
                ...state,
                metaUpdateInProcess: true
            };
        case UPDATE_CHILD_META_INFO_SUCCESS:
            let data = action.payload.pkg;
            console.log('DATA IN CHILD REDUCER*********', data);
            return {
                ...state,
                metaUpdateInProcess: false,
                children: state.children.map((child, index) => {
                    if (index === action.payload.childIndex) {
                        if (data.modalStatus === 'edit') {
                            console.log('editing existing child', data)
                            return {
                                ...child,
                                childMetadata: child.childMetadata.map((meta, metaIndex) => {
                                    if (metaIndex === data.index) {
                                        console.log('found metadata to edit', data);
                                        return {
                                            ...meta,
                                            name: data.name,
                                            description: data.description,
                                            metadataCategory: data.metadataCategory
                                        }
                                    };
                                    return meta;
                                })
                            }
                        } else {
                            console.log('ADDING NEW ITEM', data);
                            // delete data.status, data.metadataId, data.index;
                            return {
                                ...child,
                                childMetadata: child.childMetadata.concat(data)
                            }
                        }
                    };
                    return child;
                })

            };
        case UPDATE_CHILD_META_INFO_ERROR:
            return {
                ...state,
                metaUpdateInProcess: true,
                metaUpdateError: action.payload.error
            };
        default: 
            return state;
    }
}


// state.children.map((child, index) => {
//     console.log('UPDATE CHILD VALUE', child, index);
//     if(index === action.payload.index) {
//         return {
//             ...child,
//             [action.payload.propertyName]: action.payload.value
//         };
//     };
//     return child;
// });