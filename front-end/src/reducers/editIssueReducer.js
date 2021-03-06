import {
    EDIT_ISSUES_START,
    EDIT_ISSUES_FAIL,
    EDIT_ISSUES_SUCCESS,
    GET_EDIT_ISSUES_START,
    GET_EDIT_ISSUES_FAIL,
    GET_EDIT_ISSUES_SUCCESS,
} from "../actions/editIssueAction"

export const initialState = {  
        title: "",
        id: "",
        description: "",
        upVotes: "",
        user_id: ""
      }

export const editIssueReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_ISSUES_START:
            return {
                ...state,
                isFetching: true
            };
        case EDIT_ISSUES_FAIL:
            return {
                ...state,
                isFetching: false,
                
            };
        case EDIT_ISSUES_SUCCESS:
            return {
                ...state,
                    description: "",
                    id: "",
                    title: "",
                    upVotes: "",
                    user_id:""
                    
                }
        case GET_EDIT_ISSUES_START:
            return {
                ...state,
                isFetching: true
            };
        case GET_EDIT_ISSUES_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        case GET_EDIT_ISSUES_SUCCESS:
            return {
                ...state,
                issue: action.payload.pop(),
                isFetching: false
            };
        default:
            return state;
    }
}