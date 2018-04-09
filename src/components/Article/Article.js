import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

const classNames = (...args) => args.filter(Boolean).join(' ');

export const Article = ({ className, title, children }) => {
    return (
        <article className={classNames('Article', className)}>
            <h2 className="Article__title">{title}</h2>
            {children}
        </article>
    );
};

Article.propTypes = {
    className: PropTypes.string,
    title: PropTypes.any,
    children: PropTypes.any,
};

Article.defaultProps = {
    className: null,
    title: null,
    children: null,
};
