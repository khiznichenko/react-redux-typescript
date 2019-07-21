import * as moment from 'moment';
import { EntitiesActions } from '../actions';
import { TAppAction } from '../actions/TAppAction';
import { IEntitiesData } from '../store/AppState';

const now = moment().format('x');
const initialState: IEntitiesData = {
    [now]: {
        id: now,
        lastEdited: now,
        text: 'New timeline started.',
    },
};

export default function entitiesReducer(
    state: Readonly<IEntitiesData> = initialState,
    action: TAppAction,
): IEntitiesData {
    switch (action.type) {
        case EntitiesActions.ADD_ENTITY: {
            return {
                ...state,
                [action.payload.id]: action.payload,
            };
        }

        case EntitiesActions.SAVE_ENTITY: {
            return {
                ...state,
                [action.payload.id]: action.payload,
            };
        }

        default:
            return state;
    }
}
