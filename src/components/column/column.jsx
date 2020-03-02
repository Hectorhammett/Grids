import './column.scss';
import React from 'react';
import cx from 'classnames';

const Column = ({ 
    children,
    large = 12,
    xlarge = 12,
    medium = 8,
    small = 4,
    xsmall = 4,
    className = ''
 }) => {
    const classes = cx(
        'row__column',
        `row__column-xl-${xlarge}`,
        `row__column-l-${large}`,
        `row__column-m-${medium}`,
        `row__column-s-${small}`,
        `row__column-xs-${xsmall}`,
        className,
    );

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Column;