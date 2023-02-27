import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

import App from './App';
//ReactDom is out of date for React 18
//ReactDOM.render(<App />, document.getElementById('root'));
const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App/>);