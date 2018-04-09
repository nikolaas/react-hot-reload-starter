import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const classNames = (...args) => args.filter(Boolean).join(' ');

export const Button = ({ className, ...props }) => {
    return (
        <button {...props} className={classNames('Button', className)}/>
    );
};

Button.propTypes = {
    className: PropTypes.string,
};

Button.defaultProps = {
    className: null,
};
