import './row.scss';
import React from 'react';

const Row = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className='container__row'>
            {children}
        </div>
    )
}

export default Row;