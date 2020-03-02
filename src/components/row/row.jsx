import './row.scss';
import React from 'react';
import cx from 'classnames';

const Row = ({ children, className, gutter = false, ...props }) => {
    const classes = cx('container__row', className, { 'container__row-gutter' : gutter });
    
    return (
        <div className={classes}>
            {children}
        </div>
    );
}

export default Row;