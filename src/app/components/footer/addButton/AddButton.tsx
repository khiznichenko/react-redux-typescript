import * as React from 'react';
import * as s from './AddButton.css';

interface IAddButtonProps {
    onClick(): void;
}

const AddButton: React.FC<IAddButtonProps> = (props) => {
    return (
        <div
            className={s.button}
            onClick={props.onClick}
        >
            +
        </div>
    );
};

export default AddButton;
