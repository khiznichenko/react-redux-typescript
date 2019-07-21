import * as React from 'react';
import * as DeleteIcon from '../../../../../assets/images/svg/cross_icon.svg';

import * as s from './DeleteButton.css';

interface IDeleteButtonProps {
    onClick(): void;
}
const DeleteButton: React.FC<IDeleteButtonProps> = (props) => {
    const deleteButtonHtml = (
        <div
            className={s.button}
            dangerouslySetInnerHTML={{ __html: DeleteIcon }}
            onClick={props.onClick}
        />
    );

    return (
        <div className={s.wrap}>
            {deleteButtonHtml}
        </div>
    );
};

export default DeleteButton;
