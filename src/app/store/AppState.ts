export interface IAppState {
    entities: IEntitiesData;
    ui: IUIData;
}

export interface IEntitiesData {
    [timestamp: string]: IEntityData;
}

export interface IEntityData {
    id: string; // timestamp
    text: string;
    lastEdited: string; // timestamp
}

export interface IUIData {
    nowEditing: IEntityData['id'] | null;
}
