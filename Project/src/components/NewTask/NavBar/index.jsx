import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  import About from '../About';
  import Contact from '../Contact';
  import Home from '../Home';
  import Login  from '../Login'
  import SignUp  from '../SignUp'
class NavBar extends React.Component {
constructor(){
  super();
 this.state={
  NavStatus: false
 }
}

SignOut =() =>{
 localStorage.setItem('UserEmail', '');
 localStorage.setItem('UserPassword','');
 this.setState({
   Count: this.state.Count + 1
 })
  
}
    render() {
        
        return <div>
        <Router>

             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Your Logo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to='/Home'  >Home <span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link" to='/About' >About</Link>
            <Link className="nav-item nav-link" to='/Contact'>Contact</Link>
            <Link className="nav-item nav-link" to='/SignUp' >SignUp</Link>
            {
            localStorage.getItem('UserStatus')?
            <>
            <Link className="nav-item nav-link"  >{localStorage.getItem('UserEmail')}</Link>
            <Link className="nav-item nav-link"  onClick={this.SignOut}>SignOut</Link>
            </>
            :
            <Link className="nav-item nav-link" to='/' >Login</Link>

            


          }
            
          </div>
        </div>
      </nav>

      <Switch>
          
      {/* <Route exact
  path='/Home'
  render={(props) => (
    <Home {...props} status={this.state.status} />
  )}
/> */}
        
         
          <Route path="/Home" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/SignUp" component={SignUp}/>
          <Route exact path="/" component={Login}/>
           
      
        
            
        </Switch>
 </Router>
     
     
        </div>;
    }
}

export default NavBar;