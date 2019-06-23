import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Navbar from './components/layout/Navbar';
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import User from "./components/pages/User";

/**
 *  App component
 */
class App extends Component {

    /**
     * Lyfecicle render method
     * @returns {*}
     */
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/user/:login" component={User}/>
                            <Route exact path="/about" component={About}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;