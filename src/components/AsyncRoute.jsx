import importedComponent from 'react-imported-component';
import { registerAsyncReducer } from '../store';
import { RouteLoading } from '../components/RouteLoading';

const importComponentAndReducer = (name, componentLoader, reducerLoader) => () => {
    return Promise.all([componentLoader(), reducerLoader()])
        .then(([component, reducer]) => {
            registerAsyncReducer(name, reducer);
            return component;
        });
};

export const AsyncRoute = ({ name, component, reducer, loading = RouteLoading, error = RouteLoading }) => {
    return importedComponent(importComponentAndReducer(name, component, reducer), {
        LoadingComponent: loading,
        ErrorComponent: error,
    });
};
