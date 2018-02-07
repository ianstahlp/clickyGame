import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper"
import Router from "./components/Router"

const App = () =>
    <Router>
        <div>
            <Header />
            <Wrapper>
           
            </Wrapper>
         
        </div>
    </Router>;

export default App;