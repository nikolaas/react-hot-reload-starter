import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment } from './SyncCounter.actions';

export const RawSyncCounter = ({ counter, onIncrement }) => {
    return (
        <div>
            <h1>Counter {process.env.VERSION}</h1>
            <p>Counter: <span style={{ color: '#f00' }}>{counter}</span></p>
            <button onClick={() => onIncrement()}>Increment</button>
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
