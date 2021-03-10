import React, { Component } from 'react';
import '../App.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'; 
toast.configure() ;


const  ShowToastButton = ()=>  {

const ToastBtn = () =>{
        toast.warning('Danger Message', {autoClose:1000}) 
		// Set to 3sec 
		toast.success('Wuccessful Message', {autoClose:2000}) 
		// User have to close it 
		toast.error('Error Message', {autoClose:3000})  
}
return (
    <div style={{textAlign: 'center'}}>
        <h1>ShowToastButton</h1> 
        <button type="button" className="btn btn-primary" onClick={ToastBtn}>Toast Button</button>
    </div>
        )

}
export default ShowToastButton
