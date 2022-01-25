require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './style.scss';

const appElement = document.getElementById('app');

ReactDOM.render(<App />, appElement);