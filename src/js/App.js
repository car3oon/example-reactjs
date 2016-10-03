import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './store';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const app = document.getElementById('app');
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <LocaleProvider locale={enUS}>
            <Router history={browserHistory} routes={routes} />
        </LocaleProvider>
    </Provider>
    , app);
