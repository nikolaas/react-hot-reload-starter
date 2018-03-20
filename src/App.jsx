import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { asyncComponent } from './components/AsyncComponent';
import NotFound from './routes/NotFound';
import './styles.scss';

const SyncCounter = asyncComponent(() => import('./routes/SyncCounter'));
const AsyncComputer = asyncComponent(() => import('./routes/AsyncComputer'));

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={() => <Redirect to="/sync-counter"/>}/>
            <Route exact path="/sync-counter" component={SyncCounter}/>
            <Route exact path="/async-computer" component={AsyncComputer}/>
            <Route component={NotFound}/>
        </Switch>
    );
};
