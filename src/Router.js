import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './scenes/home/home';
import Sidebar from './components/navigation/sidebar/sidebar';
import Header from './components/navigation/header/header';

const Router = () => (
    <BrowserRouter>
        <Sidebar/>
        <div className='right-panel'>
            <Header/>
            <div className="content">
                <Switch>
                    <Route path="/" component={Home} exact />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);

export default Router;
