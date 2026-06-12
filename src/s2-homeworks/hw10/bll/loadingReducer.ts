import {changeThemeId, themeReducer} from "../../hw12/bll/themeReducer";

const initState = {
    isLoading: false,
}

type DataState = typeof initState


export const loadingReducer = (state = initState, action: AppActionType):DataState  => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING": {
            return {
                ...state, isLoading: action.isLoading
            }
        }

        default:
            return state
    }
}



export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

export type LoadingActionType = {
    type: 'CHANGE_LOADING',
    isLoading: boolean
}


export type AppActionType = LoadingActionType   // |