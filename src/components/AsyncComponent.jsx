import React from 'react';
import PropTypes from 'prop-types';
import importedComponent from 'react-imported-component';

class DefaultLoadingRenderer extends React.Component {

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

const DefaultErrorRenderer = ({ error }) => {
    return (
        <div>
            <p>Error occurred:</p>
            <p>{String(error)}</p>
        </div>
    );
};

DefaultErrorRenderer.propTypes = {
    error: PropTypes.any,
};

DefaultErrorRenderer.defaultProps = {
    error: null,
};

const normalizeParams = params => {
    if (params.component) {
        return params;
    }
    return { component: params };
};

const createComponentFactory = ({ component, loadingComponent, errorComponent }) => {
    return () => {
        return importedComponent(component, {
            LoadingComponent: loadingComponent || DefaultLoadingRenderer,
            ErrorComponent: errorComponent || DefaultErrorRenderer,
            onError: err => {
                console.error('The error occurred when loading async component', err);
            },
        });
    };
};

const createComponentProvider = componentFactory => {
    let Component = null;
    return () => {
        if (Component == null) {
            Component = componentFactory();
        }
        return Component;
    };
};

export const asyncComponent = params => {
    const componentConfig = normalizeParams(params);
    const componentFactory = createComponentFactory(componentConfig);
    const componentProvider = createComponentProvider(componentFactory);

    const AsyncComponent = props => {
        const Component = componentProvider();
        return <Component {...props}/>;
    };
    AsyncComponent.displayName = `async(${params.name || 'Component'})`;

    return AsyncComponent;
};
