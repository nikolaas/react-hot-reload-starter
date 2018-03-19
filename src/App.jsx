import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import SyncCounter from './routes/SyncCounter';

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={() => <Redirect to="/sync-counter"/>}/>
            <Route exact path="/sync-counter" component={SyncCounter}/>
        </Switch>
    );
};
