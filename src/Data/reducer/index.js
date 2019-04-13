import { SEARCH_ISSUE } from "../constant/action-type";
import { combineReducers } from 'redux'

const initState = {
    issues: [],
    urlApi: '',
}

function issuesReducer(state = initState.issues, action){
  return state
}

function urlReducer(state= initState.urlApi, action) {
 return state
}

export const rootReducer = combineReducers({issuesReducer, urlReducer})

