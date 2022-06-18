import { combineReducers, legacy_createStore as createStore } from 'redux'
import { themeReducer } from './themeReducer';

const reducers = combineReducers({ theme: themeReducer })

export const themeStore = createStore(reducers)

export type ThemeStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
