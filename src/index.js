import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './store';
import { createReducer } from './reducers';
import App from './App';

const store = configureStore(createReducer());

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter basename={process.env.APP_BASE_URL}>
                <Provider store={store}>
                    <Component/>
                </Provider>
            </BrowserRouter>
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
        store.replaceReducer(createReducer());
    });

    //TODO reload store on update "./store" module
}
