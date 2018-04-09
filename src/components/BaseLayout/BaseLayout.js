import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import './BaseLayout.scss';

const classNames = (...args) => args.filter(Boolean).join(' ');

export const BaseLayout = ({ contentClassName, contentStyle, children }) => {
    return (
        <div className="BaseLayout">
            <Header minimize>
                <Nav/>
            </Header>
            <main className={classNames('container', 'BaseLayout__content', contentClassName)} style={contentStyle}>
                {children}
            </main>
        </div>
    );
};

BaseLayout.propTypes = {
    contentClassName: PropTypes.string,
    contentStyle: PropTypes.object,
    children: PropTypes.any,
};

BaseLayout.defaultProps = {
    contentClassName: null,
    contentStyle: null,
    children: null,
};
