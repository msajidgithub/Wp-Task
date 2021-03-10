import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import About from './About'
import "../App.css"


const  Navi = () => {

    return (
        <div className="main" >

        <Router>
  
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
             
           
           

        </Router>

    </div>

    )
   
}




export default Navi;