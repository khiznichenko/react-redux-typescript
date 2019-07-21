import * as React from 'react';
import * as s from './Header.css';

const Header: React.FC = () => {
    return (
        <div className={s.wrap}>
            <div className={s.title}>
                Happened:
            </div>
        </div>
    );
};

export default Header;
