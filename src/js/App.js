import React from "react";
import ReactDOM from "react-dom";
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import Layout from "./components/Layout";

const app = document.getElementById('app');
ReactDOM.render(
    <LocaleProvider locale={enUS}>
        <Layout/>
    </LocaleProvider>
    , app);
