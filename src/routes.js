import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import App from './components/App';
import Blog from './components/Blog';

import About from './components/About';
import Contact from './components/Contact';

import Home from './containers/Home';

const AppRoutes = () => 
    <App>
        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
        </Switch>
    </App>


export default AppRoutes;