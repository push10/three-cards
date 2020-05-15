import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Desk from './Desk';

const App = () => {
    return (
        <BrowserRouter>
           <Route path='/' exact component={Login}></Route>
           <Route path='/desk' component={Desk} ></Route>
        </BrowserRouter>
    )
}

export default App;