import React, { Component, useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import ShowCards from './ShowCards';
import ShowToastButton  from './ShowToastButton';
import AddUser from './AddUser';
import UserList from './UserList'

 const  Nav = ()=> {
    
        return (
            <div>
                <Router>
                   <div>
<div className="container-fluid">
     
     <header>     
      <div className="container-fluid">
            <div className="heading"> <h1>Website On React Js</h1> </div>
     </div>
     </header>

    <div className="container-fluid">
<section >
  <nav>
    <ul > 
        <Link className="navText nav-item nav-link" to='/'>               ShowCards   </Link>
        <Link className="navText nav-item nav-link" to='/AddUser' >       AddUser</Link>
        <Link className="navText nav-item nav-link" to='/ShowToastButton'>ShowToastButton</Link>
        <Link className="navText nav-item nav-link" to='/UserList' >      UserList</Link>
    </ul>
  </nav>
  
  <article>
    <Switch>
        <Route exact path="/"                component={ShowCards}/>
        <Route       path="/AddUser"         component={AddUser}/>
        <Route       path="/ShowToastButton" component={ShowToastButton}/>
        <Route       path="/UserList"        component={UserList}/>
    </Switch>   
 </article>
</section>
  </div>
  </div>
  </div></Router>
                
            </div>
        )
    }
    export default Nav;
