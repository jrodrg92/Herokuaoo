import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import App from './components/App';
import Blog from './components/Blog';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
    </App>


export default AppRoutes;