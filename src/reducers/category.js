import {QUERY, ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY,RECEIVE_CATEGORY} from '../actions/actionsType'

export default function category(state={
    category:[],
    showModal:false
}, action) {
    switch (action.type) {
        case RECEIVE_CATEGORY:
            return  Object.assign({}, state, {category:action.category})
        case DELETE_CATEGORY:
            return state
        case EDIT_CATEGORY:
            return state
        default:
            return state
    }
}