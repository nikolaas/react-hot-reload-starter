import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Popup } from '../Popup';
import './Nav.scss';

const classNames = (...args) => args.filter(Boolean).join(' ');

export const Nav = ({ className }) => {
    return (
        <nav className={classNames('Nav', className)}>
            <Link className="Nav__item Nav__link" to="/get-started">Get Started</Link>
            <Popup className="Nav__item" name="Examples">
                <ul className="Nav__menu">
                    <li className="Nav__menu-item">
                        <Link className="Nav__link" to="/sync-counter">Sync Counter</Link>
                    </li>
                    <li className="Nav__menu-item">
                        <Link className="Nav__link" to="/async-computer">Async Computer</Link>
                    </li>
                </ul>
            </Popup>
            <a className="Nav__item Nav__link" href="https://github.com/nikolaas/react-hot-reload-starter">
                View on GitHub
            </a>
        </nav>
    );
};

Nav.propTypes = {
    className: PropTypes.string,
};

Nav.defaultProps = {
    className: undefined,
};
