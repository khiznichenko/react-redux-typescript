import * as _ from 'lodash';
import * as React from 'react';
import { IEntitiesData, IEntityData, IUIData } from '../../store/AppState';
import Entity from './entity/Entity';
import * as s from './TimeLine.css';

interface ITimeLineProps {
    entities: IEntitiesData;
    nowEditing: IUIData['nowEditing'];
    onStartEdit(id: IEntityData['id']): void;
    onSave(data: IEntityData): void;
}

const TimeLine: React.FC<ITimeLineProps> = (props) => {
    const handleStartEdit = (id: IEntityData['id']) => {
        props.onStartEdit(id);
    };

    const handleSave = (data: IEntityData) => {
        props.onSave(data);
    };

    const entities = _.values(props.entities).map((entity: IEntityData) => {
        const isEditing = entity.id === props.nowEditing;
        return (
            <Entity
                key={entity.id}
                id={entity.id}
                text={entity.text}
                isEditing={isEditing}
                lastEdited={entity.lastEdited}
                onStartEdit={handleStartEdit}
                onSave={handleSave}
            />
        );
    });

    return (
        <div className={s.wrap}>
            {entities}
        </div>
    );
};

export default TimeLine;
