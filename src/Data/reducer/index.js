import { SEARCH_ISSUE } from "../constant/action-type";
import { combineReducers } from 'redux'
import {ISSUES_DATA} from '../MockData'


const initState = {
    issues: ISSUES_DATA.issues,
    
}

// function issuesReducer(state = initState, action){
//   return state
// }

// function urlReducer(state= initState, action) {
//  return state
// }

// export const rootReducer = combineReducers({issuesReducer, urlReducer})

export function rootReducer(state = initState, action) {
    return state
}
