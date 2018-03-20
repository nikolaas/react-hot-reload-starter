import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.scss';

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
