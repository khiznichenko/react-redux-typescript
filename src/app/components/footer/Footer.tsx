import * as React from 'react';
import AddButton from './addButton/AddButton';
import * as s from './Footer.css';

interface IFooterProps {
    onAddEntity(): void;
}

const Footer: React.FC<IFooterProps> = (props) => {
    return (
        <div className={s.wrap}>
            <AddButton onClick={props.onAddEntity}/>
        </div>
    );
};

export default Footer;
