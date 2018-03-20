import React from 'react';
import PropTypes from 'prop-types';
import importedComponent from 'react-imported-component';

class LoadingRenderer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            delay: 200,
            pastDelay: false,
        };

        this.timeout = setTimeout(() => {
            this.setState({ pastDelay: true });
            this.timeout = null;
        }, this.state.delay);
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }

    render() {
        const { pastDelay } = this.state;
        return pastDelay ? <div>Loading...</div> : null;
    }

}

const ErrorRenderer = ({ error }) => {
    return (
        <div>
            <p>Error occurred:</p>
            <p>{String(error)}</p>
        </div>
    );
};

ErrorRenderer.propTypes = {
    error: PropTypes.any,
};

ErrorRenderer.defaultProps = {
    error: null,
};

export const asyncComponent = params => {
    const component = params.component ? params.component : params;
    const LoadingComponent = (params.component ? params.loading : null) || LoadingRenderer;
    const ErrorComponent = (params.component ? params.error : null) || ErrorRenderer;
    return importedComponent(component, {
        LoadingComponent,
        ErrorComponent,
        onError: error => {
            /* eslint-disable no-console */
            console.log('The error occurred when loading async component', error);
        },
    });
};
