import { Moment } from 'moment';
import * as React from 'react';
import * as s from './TimeStamp.css';

interface ITimeStampProps {
    date: Moment;
}

const TimeStamp: React.FC<ITimeStampProps> = (props) => {
    return (
        <div className={s.wrap}>
            <div>
                {props.date.format('MMM DD')}
            </div>
            <div>
                {props.date.format('HH:mm:ss')}
            </div>
        </div>
    );
};

export default TimeStamp;
