import React, { Component } from 'react'
import Login from './Login'

export default class Home extends Component {
constructor(props){
    super(props);
    this.state={
        statusCheck: true

    }
}
SignOut = () => {
    this.setState({
        statusCheck : false
    })
}

    render() {
        return (
            <>{this.state.statusCheck ? 
            <div>
                <h1>Home</h1>
                <h4>{this.props.userNames}</h4>
            </div>:
            <Login/>
        }
        </>
        )
    }
}
