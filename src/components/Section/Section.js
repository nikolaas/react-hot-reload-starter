import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

const classNames = (...args) => args.filter(Boolean).join(' ');

export const Section = ({ className, title, children }) => {
    return (
        <section className={classNames('Section', className)}>
            <h2 className="Section__title">{title}</h2>
            {children}
        </section>
    );
};

Section.propTypes = {
    className: PropTypes.string,
    title: PropTypes.any,
    children: PropTypes.any,
};

Section.defaultProps = {
    className: null,
    title: null,
    children: null,
};
