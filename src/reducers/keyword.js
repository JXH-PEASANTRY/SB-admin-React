import * as TYPE from '../actions/actionsType'

export default function keyword(state = {
    keyword: [],
    categoryId: '',
    showTable:false
}, action) {
    switch (action.type) {
        case TYPE.REQUEST_KEYWORD:
            return Object.assign({}, state,
                {showTable: action.showTable,
                 categoryId:action.categoryId
            })
        case TYPE.RECEIVE_KEYWORD:
            return Object.assign({}, state, {keyword: action.keyword})
        default:
            return state
    }
}