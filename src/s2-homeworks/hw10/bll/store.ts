import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore} from 'redux'
import {themeReducer} from '../../hw12/bll/themeReducer'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const reducers = combineReducers({
    loading: loadingReducer, // hw10
    theme: themeReducer, // hw12
})

const store = legacy_createStore(reducers)


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev // для того чтобы автотесты видели состояние данных
