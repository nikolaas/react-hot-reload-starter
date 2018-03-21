import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.dynamic.svg';
import './Main.scss';

export default () => {
    return (
        <div className="Main">
            <header className="Main__header">
                <Logo className="Main__logo"/>
                <h1 className="Main__title">React Hot Reload Starter</h1>
            </header>
            <main className="Main__content">
                <Link className="Main__get-started" to="/get-started">Get started</Link>
            </main>
        </div>
    );
};
