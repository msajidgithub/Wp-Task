import axios from 'axios';
import React, { Component, useState } from 'react';
import '../App.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'; 
toast.configure() 

const  CallBack = ()=> {

const [userName,setUserName] = useState('');
const [userEmail,setUserEmail] = useState('');
const [contact,setContact] = useState('');
const [dob,setDob] = useState('');
const [gender,setGender] = useState('');
const [category, setCategory] = useState('')



const newdata = ()=>{

//   if(userName == '' ){
//   toast.warning('User name can not be Empty', {autoClose:3000}) 		    
//  }
//  if(typeof userName !== "undefined"){
//     if(!userName.match(/^[a-zA-Z]+$/)){
//   toast.warning('User name should only letter', {autoClose:3000}) 		    
//     }        
//  }
//  //Email
//  if(userEmail == ''){
//   toast.warning('Email can not be Empty', {autoClose:3000}) 		    
//  }

//  if(typeof userEmail !== "undefined"){
//     let lastAtPos = userEmail.lastIndexOf('@');
//     let lastDotPos = userEmail.lastIndexOf('.');

//     if (!(lastAtPos < lastDotPos && lastAtPos > 0 && userEmail.indexOf('@@') == -1 && lastDotPos > 2 && (userEmail.length - lastDotPos) > 2)) {
//   toast.warning('Email is not valid', {autoClose:3000}) 		    
    
//     }
// }  



  axios.post('http://localhost:8000/User',{
    userName,
    userEmail,
    contact,
    dob,
    gender,
    category
  })
  console.log('it is working,',userName);

  toast.success('Hi,  '+userName+' Your data has been submited', {autoClose:false}) 		

}
   return (
  
   <div style={{padding: '1% 1.5%'}}>
     <form onSubmit={newdata}>
     <div className="form-group">
        <label htmlFor="formGroupExampleInput">Department</label>
        <input type="text" required className="form-control" id="formGroupExampleInput" required placeholder="Enter Your Name"
         onChange={(e) =>{
           setCategory(e.target.value)
         }}/>

        </div>
         <div className="form-group">
        <label htmlFor="formGroupExampleInput">Name</label>
        <input type="text" required className="form-control" id="formGroupExampleInput" placeholder="Enter Your Name"
         onChange={(e)=>{
           setUserName(e.target.value)
         }} />
        </div>
        
        <div className="form-group">
        <label htmlFor="formGroupExampleInput">Email Address</label>
        <input type="email" reuired className="form-control" id="formGroupExampleInput" placeholder="Enter Your Email Address"
        onChange={(e) =>{
          setUserEmail((e.target.value).toLowerCase())
        }} />
        </div>

        <div className="form-group">
        <label htmlFor="formGroupExampleInput">Contact Number</label>  
        <br/> e.g: 0321342123
        <input type="Number" required className="form-control" id="formGroupExampleInput" placeholder="Enter Your Contact Number" 
         onChange={(e)=>{
           setContact(e.target.value)
         }}/>
        </div>

        <div className="form-group">
        <label htmlFor="formGroupExampleInput">Date Of Birth</label>
        <input type="date" required className="form-control" id="formGroupExampleInput" placeholder="Example input" 
        onChange={(e)=>{
          setDob(e.target.value)
        }}/>
        </div>    
        
         
      <label className="custom-control-label" htmlFor="customControlValidation2">Gender</label>
       
       <div onChange={(e)=>{
         setGender(e.target.value)
         console.log(e.target.value )
       }}>
       <div className="form-check form-check-inline" >
          <input className="form-check-input"  type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="Male" />
          <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="Female" />
          <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
        </div>
        </div>
        
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary" >Save</button>
            <button type="button" className="btn btn-danger">Clear</button>
          </div>
        </div>
      </form>
            </div>
 
        )
    
}
export default CallBack;