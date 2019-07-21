import * as React from 'react';
import * as s from './Layout.css';

interface ILayoutProps {
    [key: string]: any;
}

const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
    return (
        <div className={s.wrap}>
            {props.children}
        </div>
    );
};

export default Layout;
