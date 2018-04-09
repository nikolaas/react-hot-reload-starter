import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import { increment } from './SyncCounter.actions';

export const RawSyncCounter = ({ counter, onIncrement }) => {
    return (
        <div>
            <Header minimize>
                <Nav/>
            </Header>
            <div className="container">
                <h2>Counter {process.env.VERSION}</h2>
                <p className="SyncCounter__value">Counter: <span style={{ color: '#f00' }}>{counter}</span></p>
                <button onClick={() => onIncrement()}>Increment</button>
            </div>
        </div>
    );
};

RawSyncCounter.propTypes = {
    counter: PropTypes.number,
    onIncrement: PropTypes.func.isRequired,
};

RawSyncCounter.defaultProps = {
    counter: 0,
};

const mapStateToProps = state => {
    const { syncCounter } = state;
    return { counter: syncCounter };
};

const mapDispatchToProps = {
    onIncrement: increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(RawSyncCounter);
