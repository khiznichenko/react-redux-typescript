import * as moment from 'moment';
import * as React from 'react';
import { IEntityData } from '../../../store/AppState';
import DeleteButton from './deleteButton/DeleteButton';
import * as s from './Entity.css';
import EntityContent from './entityContent/EntityContent';
import TimeStamp from './timeStamp/TimeStamp';

interface IEntityProps {
    id: IEntityData['id'];
    lastEdited: IEntityData['lastEdited'];
    text: IEntityData['text'];
    isEditing: boolean;
    onStartEdit(id: IEntityData['id']): void;
    onSave(data: IEntityData): void;
    onDelete(id: IEntityData['id']): void;
}

const Entity: React.FC<IEntityProps> = (props) => {
    const handleStartEdit = () => {
        props.onStartEdit(props.id);
    };

    const handleSave = (text: IEntityData['text']) => {
        props.onSave({
            id: props.id,
            lastEdited: moment().format('x'),
            text,
        });
    };

    const handleDelete = () => {
        props.onDelete(props.id);
    };

    return (
        <div className={s.wrap}>
            <TimeStamp date={moment(+props.id)}/>
            <EntityContent
                text={props.text}
                isEditing={props.isEditing}
                isNewEntity={props.id === props.lastEdited}
                onStartEdit={handleStartEdit}
                onSave={handleSave}
            />
            <DeleteButton onClick={handleDelete}/>
        </div>
    );
};

export default Entity;
