import { IEntityData } from 'app/store/AppState';

export enum uiActions {
    START_EDITING_ENTITY = 'START_EDITING_ENTITY',
}

interface IStartEditingAction {
    payload: IEntityData['id'];
    type: uiActions.START_EDITING_ENTITY;
}

export function startEditing(payload: IEntityData['id']) {
    return {
        payload,
        type: uiActions.START_EDITING_ENTITY,
    };
}

export type TUIAction =
    IStartEditingAction;
