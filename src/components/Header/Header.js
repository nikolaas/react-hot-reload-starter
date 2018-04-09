import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/images/logo.dynamic.svg';
import './Header.scss';

const classNames = (...args) => args.filter(Boolean).join(' ');

export const Header = ({ className, minimize, children }) => {
    return (
        <header className={classNames('Header', minimize && 'Header--minimize', className)}>
            <Logo className="Header__logo"/>
            <h1 className="Header__title">React Hot Reload Starter</h1>
            {children}
        </header>
    );
};

Header.propTypes = {
    className: PropTypes.string,
    minimize: PropTypes.bool,
    children: PropTypes.any,
};

Header.defaultProps = {
    className: undefined,
    minimize: false,
    children: null,
};
