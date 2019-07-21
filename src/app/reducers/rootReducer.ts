import { IAppState } from 'app/store/AppState';
import { combineReducers } from 'redux';
import entitiesReducer from './entitiesReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers<IAppState>({
    entities: entitiesReducer,
    ui: uiReducer,
});

export default rootReducer;
