import axios from 'axios';
import React, { Component, useState, useRef } from 'react';
import '../App.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'; 
toast.configure() 

const  AddUser = ()=> {

const [userName,setUserName] = useState('');
const [userEmail,setUserEmail] = useState('');
const [contact,setContact] = useState('');
const [dob,setDob] = useState('');
const [gender,setGender] = useState('');
const [category, setCategory] = useState('')
const [isload, setIsload] = useState(true)
const formRef = useRef(null);



const newdata = (event)=>{
  event.preventDefault()

 
  if((category == '') ){
    toast.error('Department is empty or \n Invalid Fromat')
  }else   
  if((userName == '') ){
    toast.error('User name is empty or \n Invalid Fromat')

  }else
  if((userEmail == '') ){
    toast.error('User name is empty or \n Invalid Fromat')
    if(typeof userEmail !== "undefined"){
      let lastAtPos = userEmail.lastIndexOf('@');
      let lastDotPos = userEmail.lastIndexOf('.');
  
      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && userEmail.indexOf('@@') == -1 && lastDotPos > 2 && (userEmail.length - lastDotPos) > 2)) {
    toast.error('Email Format should be like this /n form@gmail.com', {autoClose:3000}) 		    
      
      }}
  }else
  if((contact == '') ){
    toast.error('Contact is empty or \n Invalid Fromat')
  }else
  if((dob == '')){
    toast.error('Date of birth    is empty or \n Invalid Fromat')
  }else
  if((gender == '')){
    toast.error('Gender is empty or \n Invalid Fromat')
  }
 
 else{
    axios.post('http://localhost:8000/User',{
      userName,
      userEmail,
      contact,
      dob,
      gender,
      category
    })
    console.log('it is working,',userName);
    toast.success('Hi,  '+userName+' Your data has been submited', {autoClose:2000}) 
    
    formRef.current.reset();
    setUserName('');
    setUserEmail('');
    setContact('');
    setDob('');
    setGender('');
    

  }


  }
    const clearAll=() =>{
   
    formRef.current.reset();
    setUserName('');
    setUserEmail('');
    setContact('');
    setDob('');
    setGender('');
    
  }
   return (
  
   <div style={{padding: '1% 1.5%'}} >
     <form onSubmit={(event)=>newdata(event)} id="myForm" ref={formRef}>
     <div className="form-group">
        <label htmlFor="formGroupExampleInput">Department</label>
        <input type="text"  className="form-control" id="formGroupExampleInput"  placeholder="Enter Your Name"
         onChange={(e) =>{
           setCategory(e.target.value)
         }}/>
         </div>

         <div className="form-group">
        <label htmlFor="formGroupExampleInput">Name</label>
        <input type="text"  className="form-control" id="formGroupExampleInput" placeholder="Enter Your Name"
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
        <input type="Number"  className="form-control" id="formGroupExampleInput" placeholder="Enter Your Contact Number" 
         onChange={(e)=>{
           setContact(e.target.value)
         }}/>
        </div>

        <div className="form-group">
        <label htmlFor="formGroupExampleInput">Date Of Birth</label>
        <input type="date"  className="form-control" id="formGroupExampleInput" placeholder="Example input" 
        onChange={(e)=>{
          setDob(e.target.value)
        }}/>
        </div>    

        <div >
      <label  htmlFor="customControlValidation2">Gender</label>
       <br/>
       <div className="form-check form-check-inline" >
          <input className="form-check-input"  type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" 
          onClick={(e)=>{
            setGender(e.target.value)
            console.log(e.target.value )
          }}/>
          <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" 
          onClick={(e)=>{
         setGender(e.target.value)
         console.log(e.target.value )
       }}/>
          <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
        </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary" >Save</button>
            <button type="button" className="btn btn-danger" onClick={clearAll}>Clear</button>
          </div> 
        </div>
        
      </form>
            </div>
 
        )
    
}
export default AddUser;