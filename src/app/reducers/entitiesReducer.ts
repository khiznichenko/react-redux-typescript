import * as moment from 'moment';
import { EntitiesActions } from '../actions';
import { TAppAction } from '../actions/TAppAction';
import { WELCOME_ENTITY_TEXT } from '../constants';
import { IEntitiesData } from '../store/AppState';

const now = moment().format('x');
const initialState: IEntitiesData = {
    [now]: {
        id: now,
        lastEdited: now,
        text: WELCOME_ENTITY_TEXT,
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

        case EntitiesActions.DELETE_ENTITY: {
            const entityId = action.payload;
            return {
                ...state,
                [entityId]: {
                    ...state[entityId],
                    isDeleted: true,
                },
            };
        }

        default:
            return state;
    }
}
