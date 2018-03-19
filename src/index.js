import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { rootReducer } from './reducers';
import App from './App';

const store = configureStore(rootReducer);

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component/>
            </Provider>
        </AppContainer>,
        document.getElementById('root'),
    );
};

render(App);

if (module.hot) {
    // Hot reload application
    module.hot.accept('./App', () => {
        render(App);
    });

    // Hot reload reducers
    module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer);
    });

    //TODO reload store on update "./store" module
}
