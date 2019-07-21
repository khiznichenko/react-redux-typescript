import { TEntitiesAction } from 'app/actions/entitiesActions';
import { TUIAction } from 'app/actions/uiActions';

export type TAppAction =
    TEntitiesAction
    | TUIAction;
