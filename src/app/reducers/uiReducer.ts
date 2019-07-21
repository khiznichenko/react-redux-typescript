import { EntitiesActions } from '../actions';
import { TAppAction } from '../actions/TAppAction';
import { uiActions } from '../actions/uiActions';
import { IUIData } from '../store/AppState';

const initialState: IUIData = {
    nowEditing: null,
};

export default function uiReducer(
    state: Readonly<IUIData> = initialState,
    action: TAppAction,
): IUIData {
    switch (action.type) {
        case uiActions.START_EDITING_ENTITY: {
            return {
                ...state,
                nowEditing: action.payload,
            };
        }

        case EntitiesActions.SAVE_ENTITY: {
            return {
                ...state,
                nowEditing: null,
            };
        }

        default:
            return state;
    }
}
