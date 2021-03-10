import React, { Component, useEffect, useState } from 'react';
import '../App.css';
import ReactLogo from '../images/logo512.png'
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { getUserData, postUserData } from '../util/ApiCall'


toast.configure() 
const ShowCards = ()=> {
    const [showcarddata, setShowcarddata] = useState([])
    useEffect(() => {
       FirstRander();
    }, [])
    
const ApiFunction = async () => {
    const apiCall = await getUserData();
    setShowcarddata(apiCall)
    
    }

const FirstRander =()=>{
    ApiFunction();
}
    

const submitBtn = (value)=>{ 
// Set to 3sec 
toast.success('Hi, This is '+value+' Department', {autoClose:3000}) 		
} 

const updateBtn = () =>{		
    toast.error('Update error', {autoClose:10000}) 
}

return (
    <div>
        

        {
            showcarddata.map((val)=>{
    return(
    <div className="card text-center" style={{width: '100%', marginBottom: '1rem'}}>
    <div className="card-body">
        
        <img src={ReactLogo} alt="logos" width="200px" height="200px"/>
        
        <h5 className="card-data card-title">{val.category}</h5>
        
        <p className="card-data card-text">With supporting text below as a natural lead-in to additional content.</p>          
       
        <button  className="btn btn-primary" style={{backgroundColor: 'rgb(22, 73, 22)'}}
        onClick={() =>submitBtn(val.category)}> Show Card</button>
        <button className="btn btn-primary"
        onClick={()=>updateBtn()}>  Update Card</button>
    </div>
            </div>

    )
            })
        }

        
    </div>
        )
    }
export default ShowCards
