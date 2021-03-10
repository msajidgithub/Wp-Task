import { tsConstructSignatureDeclaration } from '@babel/types';
import React, { Component } from 'react'
import Home from './Home'
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            UserEmailGet: "",
            UserPassGet: "",
            status: true

        }
    }

    LoginBtn = () =>{
      const User =  localStorage.getItem('UserEmail')
      const Email =  localStorage.getItem('UserPassword')
        if(this.state.UserEmailGet=== User){
            this.setState({
                status: false
            })
        }else{
            alert('Email or Password wrong')
        }
    }

    render() {
        return (
            <>{this.state.status ?
            <div class="container">
                <div className="col-md-6">
         
                <h1>Login</h1>
                 <form>
       
        <div className="form-row">
     
       
          <div className="form-group col-md-12">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" 
            onChange={(e)=> {
                this.setState({
                    UserEmailGet: e.target.value
                })
            }}
             />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" 
            onChange={(e)=>{
                this.setState({
                    UserPassGet: e.target.value
                })
            }}/>
          </div>
        </div>
        
        <button type="button" className="btn btn-primary" onClick={this.LoginBtn}>Login</button>
      </form>
      </div>
            </div>
        : 
        <Home userNames={this.state.UserEmailGet}  />    }
            </>
        )
    }
}
