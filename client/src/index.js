import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
// You'll need to wrap <App /> for routing to work

ReactDOM.render(
<Router>
    <App /> 
</Router>
, document.getElementById('root'));

/**
 * In react router, the first thing you do is wrap /app in a provider for it to work. 
 * Router wrapper component passes 3 props to our App.js component (and all children
 * match-contains all information about the url
 * history - contains all information about where you're been
 * location -> contains all information about the current page
 */