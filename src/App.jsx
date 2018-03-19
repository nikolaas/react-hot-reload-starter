import React from 'react';
import './App.scss';

export class App extends React.Component {

    state = {
        counter: 0,
    };

    increment() {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <div className="App">
                <h1>Counter {process.env.VERSION}</h1>
                <p>Counter: <span style={{ color: '#f00' }}>{this.state.counter}</span></p>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        );
    }

}
