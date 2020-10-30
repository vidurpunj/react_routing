import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Product from "./Product";

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Product}/>
        </Switch>
    )
}

export default App