import React, { Component } from 'react'
import Home from './Home'
import Login from './Login';
export default class SignUp extends Component {
    constructor(){
        super();
        this.state={
            UserEmail: "",
            UserPass: "",
            status: true

        }
    }

    SingUpBtn = () =>{
        if(this.state.UserEmail.trim() !== '' && this.state.UserPass){
            alert('Succefully SingUp')
            this.setState({
                status: false
            })
            
            localStorage.setItem('UserEmail', this.state.UserEmail)
            localStorage.setItem('UserPassword', this.state.UserPass)
            localStorage.setItem('UserStatus', this.state.status)
        }
        else {
            alert('Email or password is empty')
        }
       

    }

    render() {
        return (
            <>{this.state.status?
            <div class="container">
                <div className="col-md-6">
         
                <h1>SignUp</h1>
                 <form>
       
        <div className="form-row">
     
       
          <div className="form-group col-md-12">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" 
            onChange={(e)=> {
                this.setState({
                    UserEmail: e.target.value
                })
            }}
             />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" 
            onChange={(e)=>{
                this.setState({
                    UserPass: e.target.value
                })
            }}/>
          </div>
        </div>
        
        <button type="button" className="btn btn-primary" onClick={this.SingUpBtn}>Sign in</button>
      </form>
      </div>
            </div>
       : <Login/>}
          
            </>
        )
    }
}
