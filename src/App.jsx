import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment } from './actions';
import './App.scss';

class App extends React.Component {

    static propTypes = {
        counter: PropTypes.number,
        onIncrement: PropTypes.func.isRequired,
    };

    static defaultProps = {
        counter: 0,
    };

    render() {
        const { counter, onIncrement } = this.props;
        return (
            <div className="App">
                <h1>Counter {process.env.VERSION}</h1>
                <p>Counter: <span style={{ color: '#f00' }}>{counter}</span></p>
                <button onClick={onIncrement}>Increment</button>
            </div>
        );
    }

}

const mapStateToProps = state => {
    const { counter } = state;
    return { counter };
};

const mapDispatchToProps = {
    onIncrement: increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
