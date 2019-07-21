import { IEntityData } from 'app/store/AppState';

export enum EntitiesActions {
    ADD_ENTITY = 'ADD_ENTITY',
    SAVE_ENTITY = 'SAVE_ENTITY',
}

interface IAddEntityAction {
    payload: IEntityData;
    type: EntitiesActions.ADD_ENTITY;
}

export function addEntity(payload: IEntityData) {
    return {
        payload,
        type: EntitiesActions.ADD_ENTITY,
    };
}

interface ISaveEntityAction {
    payload: IEntityData;
    type: EntitiesActions.SAVE_ENTITY;
}

export function saveEntity(payload: IEntityData) {
    return {
        payload,
        type: EntitiesActions.SAVE_ENTITY,
    };
}

export type TEntitiesAction =
    IAddEntityAction
    | ISaveEntityAction;
