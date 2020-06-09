import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'screens/home';
import ListaPessoas from 'screens/pessoas';
import FormularioPessoa from 'screens/pessoas/form';

export default function Routes() {
    return (
        <Switch>
            <Route exact={true} path="/pessoas" component={ListaPessoas} />
            <Route path="/pessoa/nova" component={FormularioPessoa} />
            <Route path="/pessoa/:codigo" component={FormularioPessoa} />
            
            <Route path="/" component={Home} />
        </Switch>
    );
}