import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Main from './pages/Main'

export default (
    <Route path="/" component={Main}>
        <IndexRoute component={Main}/>
    </Route>
);
