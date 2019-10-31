import React from 'react';
import ReactDom from 'react-dom';
import { CountProvider } from './components/CountProvider'
import App from './App'


ReactDom.render(
    <CountProvider>
        <App />
    </CountProvider>
    ,
    document.querySelector('#root')
)