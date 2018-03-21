import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '../../components/Button';
import { changeArgument, sum } from './AsyncComputer.actions';
import CalculateIcon from '../../assets/images/calculate.dynamic.svg';
import './AsyncComputer.scss';

export class RawAsyncComputer extends React.Component {

    static propTypes = {
        a: PropTypes.number,
        b: PropTypes.number,
        computing: PropTypes.bool,
        result: PropTypes.number,
        error: PropTypes.string,
        onArgumentChange: PropTypes.func.isRequired,
        onSum: PropTypes.func.isRequired,
    };

    static defaultProps = {
        a: null,
        b: null,
        computing: false,
        result: null,
        error: null,
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        const parsedValue = parseInt(value, 10) || null;
        this.props.onArgumentChange(name, parsedValue);
    };

    handleResultClick = async () => {
        this.props.onSum();
    };

    render() {
        const { a, b, computing, error, result } = this.props;
        return (
            <div className="AsyncComputer">
                <h1 className="AsyncComputer__header">
                    <i className="AsyncComputer__icon"/>
                    Async Computer {process.env.VERSION}
                </h1>
                <p>
                    <label htmlFor="a">
                        {'a = '}
                        <input
                            type="text"
                            id="a"
                            name="a"
                            value={a == null ? '' : a}
                            disabled={computing}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </p>
                <p>
                    <label htmlFor="b">
                        {'b = '}
                        <input
                            type="text"
                            id="b"
                            name="b"
                            value={b == null ? '' : b}
                            disabled={computing}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </p>
                <Button className="AsyncComputer__calculate" disabled={computing} onClick={this.handleResultClick}>
                    <CalculateIcon className="AsyncComputer__calculate-icon"/> Sum
                </Button>
                {
                    computing &&
                    <p className="AsyncComputer__result">Computing...</p>
                }
                {
                    !computing && error &&
                    <p className="AsyncComputer__result">Error: <span style={{ color: '#f00' }}>{error}</span></p>
                }
                {
                    !computing && result != null &&
                    <p className="AsyncComputer__result">Sum: <span style={{ color: '#f00' }}>{result}</span></p>
                }
            </div>
        );
    }

}

const mapStateToProps = state => {
    const { asyncComputer } = state;
    const { a, b, computing, result, error } = asyncComputer;
    return { a, b, computing, result, error };
};

const mapDispatchToProps = {
    onArgumentChange: changeArgument,
    onSum: sum,
};

export default connect(mapStateToProps, mapDispatchToProps)(RawAsyncComputer);
