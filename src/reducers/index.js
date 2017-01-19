import { combineReducers } from 'redux'
import category from './category'
import keyword from './keyword'
import report from './report'

const reducer = combineReducers({
    category: category,
    keyword: keyword,
    report: report
});

export default reducer;