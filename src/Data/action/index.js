import {SEARCH_ISSUE} from '../constant/action-type'

export function searchIssue(issues) {
    return {type: SEARCH_ISSUE, issues}
}