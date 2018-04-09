import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import './Main.scss';

export default () => {
    return (
        <div className="Main">
            <Header/>
            <main className="Main__content">
                <Link className="Main__get-started" to="/get-started">Get started</Link>
            </main>
        </div>
    );
};
