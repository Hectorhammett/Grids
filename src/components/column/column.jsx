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
        'container__column',
        `container__column-xl-${xlarge}`,
        `container__column-l-${large}`,
        `container__column-m-${medium}`,
        `container__column-s-${small}`,
        `container__column-xs-${xsmall}`,
        className,
    );

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Column;