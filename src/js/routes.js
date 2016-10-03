import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Layout from './components/Layout'

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={Layout} />
    </Route>
);