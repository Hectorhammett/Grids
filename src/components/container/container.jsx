import './container.scss';
import React from 'react';
import cx from 'classnames';

const Container = ({ children, className, gutters = 0, ...props }) => {
    const classes = cx('container', className);

    const style = {}
    if (gutters) {
        style.gridColumnGap = `${gutters}px`;
    }

    return (
        <div className={classes} style={style} {...props}>
            {children}
        </div>
    );
}

const FullContainer = ({ children, className, ...props }) => {
    const classes = cx('container--full', className);
    return (
        <Container className={classes} {...props}>
            {children}
        </Container>
    )
}

const FlexibleContainer = ({ children, flex = 10, className, ...props }) => {
    const classes = cx('container--flexible', className);
    
    const style = {
        'padding': `0 ${flex}%`
    }

    return (
        <Container className={classes} style={style}>
            {children}
        </Container>
    )
};

export {
    Container,
    FullContainer,
    FlexibleContainer
}