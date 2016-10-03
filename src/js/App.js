import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import configureStore from './store';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import Layout from "./components/Layout";

const app = document.getElementById('app');
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <LocaleProvider locale={enUS}>
            <Layout/>
        </LocaleProvider>
    </Provider>
    , app);
