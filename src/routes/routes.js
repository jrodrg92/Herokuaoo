import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Container
import Home from '../containers/Home';
import Library from '../containers/Library';
import AddBook from '../containers/AddBook';
import Contact from '../containers/Contact';

import App from '../components/App';
import Blog from '../containers/Blog';

import About from '../containers/About';


const AppRoutes = () => 
    <App>
        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route exact path="/library" component={Library} />
                <Route exact path="/library/:id" component={Library} />
                <Route exact path="/library/addBook" component={AddBook} />
                <Route path="/contact" component={Contact} />
        </Switch>
    </App>


export default AppRoutes;