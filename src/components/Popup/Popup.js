import React from 'react';
import PropTypes from 'prop-types';
import './Popup.scss';

const classNames = (...args) => args.filter(Boolean).join(' ');

export const Popup = ({ className, name, children }) => {
    return (
        <div className={classNames('Popup', className)}>
            <span>{name}</span>
            <div className="Popup__content">
                {children}
            </div>
        </div>
    );
};

Popup.propTypes = {
    className: PropTypes.string,
    name: PropTypes.any,
    children: PropTypes.any,
};

Popup.defaultProps = {
    className: undefined,
    name: null,
    children: null,
};
