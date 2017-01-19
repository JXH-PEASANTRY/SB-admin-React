import {GET_REPORT,RECEIVE_REPORT} from '../actions/actionsType'


export default function category(state = {
    report: [],
}, action) {
    switch (action.type) {
        case RECEIVE_REPORT:
            return Object.assign({}, state, {report: action.report})
        default:
            return state
    }
}