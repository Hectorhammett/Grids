import './container.scss';
import React from 'react';
import cx from 'classnames';

const Container = ({ children, className, ...props }) => {
    const classes = cx('container', className);
    
    return (
        <div className={classes} {...props}>
            <div className='grid'>
                {children}
            </div>
        </div>
    )
}

const FullContainer = ({ children, className, ...props }) => {
    const classes = cx('container__full', className);
    
    return (
        <div className={classes} {...props}>
            <div className='grid'>
                {children}
            </div>
        </div>
    )
}

const FlexibleContainer = ({ children, className, ...props }) => {
    const classes = cx('container__flexible', className);
    
    return (
        <div className={classes} {...props}>
            <div className='grid'>
                {children}
            </div>
        </div>
    )
}

const GutterContainer = ({ children, className, ...props }) => {
    const classes = cx('container__gutters', className);
    
    return (
        <div className={classes} {...props}>
            <div className='grid'>
                {children}
            </div>
        </div>
    )
}

export {
    Container,
    FullContainer,
    FlexibleContainer,
    GutterContainer
}