import React, { Component } from 'react'

export default class SingUp extends Component {
constructor(props){
    super(props);
   this.state = {

    data: [
        {userName: 'Sajid',
        userEmail: 'Sajid@gmail.com',
        userPassword: 'sajid123',
}
],

  

    verify: [],
    UserNameGet: '',
    UserEmailGet: '',
    UserPassGet: ''

   }
}

SingUpBtn = ()=>{
    console.log('add Working')
    let obj = {
        userEmail: this.state.UserEmailGet,
        userPassword: this.state.UserPassGet,
    }
    this.state.verify = obj
    this.setState({
        verify: this.state.verify
    })

    this.state.data.map((v, i)=>{
        if(this.state.verify.userEmail === this.state.data[i].userEmail || 
            this.state.verify.userPass === this.state.data[i].userPassword){
            console.log('email same')
            this.setState({
                status: 'sajid'
            })
        }
        else
        {
            console.log('error')
        }
    })
    console.log('Object.com',  this.state.verify)
    console.log('Verify.com',  this.state.data[0])
}

    render() {
        return (
            <div class="container">
                <div className="col-md-6">
         
                <h1>Signup</h1>
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
        
        <button type="button" className="btn btn-primary" onClick={this.SingUpBtn}>Sign in</button>
      </form>
      </div>
            </div>
        )
    }
}
