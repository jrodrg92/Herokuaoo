import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import App from './components/App';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';

//Containers
import Home from './containers/Home';
import Library from './containers/Library';

const AppRoutes = () => 
    <App>
        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route exact path="/library" component={Library} />
                <Route exact path="/library/:id" component={Library} />
                <Route path="/contact" component={Contact} />
        </Switch>
    </App>


export default AppRoutes;