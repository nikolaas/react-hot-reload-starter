import React from 'react';
import { Switch, Route } from 'react-router';
import { asyncComponent } from './components/AsyncComponent';
import NotFound from './routes/NotFound';
import './styles/index.scss';

const Main = asyncComponent(() => import('./routes/Main'));
const GetStarted = asyncComponent(() => import('./routes/GetStarted'));
const SyncCounter = asyncComponent(() => import('./routes/SyncCounter'));
const AsyncComputer = asyncComponent(() => import('./routes/AsyncComputer'));

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/get-started" component={GetStarted}/>
            <Route exact path="/sync-counter" component={SyncCounter}/>
            <Route exact path="/async-computer" component={AsyncComputer}/>
            <Route component={NotFound}/>
        </Switch>
    );
};
