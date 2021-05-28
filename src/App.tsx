import React from 'react';
import './App.css';
import TestJs from "./TestJs";
import {BrowserRouter} from "react-router-dom";
import Wallet from "./wallet/Wallet";
import {Route, Switch} from "react-router";
import Home from "./home/Home";

function App() {

    TestJs()

    return (
        <BrowserRouter>
            <div className="App">

                <Switch>

                    <Route path="/wallet">
                        <Wallet/>
                    </Route>

                    <Route path="/">
                        <Home/>
                    </Route>

                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
