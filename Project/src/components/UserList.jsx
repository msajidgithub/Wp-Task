import React, { Component, useEffect, useState } from 'react';
import '../App.css';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import axios from 'axios';
import { getUserData, } from '../util/ApiCall'
import modalStatus from './ModalForm'

toast.configure() 


const UserList = ()=>{
  useEffect(() => {
    FirstRander()
  }, [])
 
const [userdata, setUserdata] = useState([])
const [modalStatus, setModalStatus] = useState(false)
const ApiFunction = async () => {
  const apiCall = await getUserData();
  setUserdata(apiCall)

} 
const delBtn = (id,val)=>{
  
  axios.delete(`http://localhost:8000/User/${id}`)
  setUserdata(userdata.filter(item => item.id !== id));
  toast.error( val +' records is deleted', {autoClose:10000}) 


}
const editBtn = ()=>{
  console.log('hi edit')  
  setModalStatus(true)
  console.log('StatusUpdate',modalStatus)
}

const FirstRander = ()=>{
    ApiFunction();

    if( userdata != [] ){
      toast.success('successful', {autoClose:2000})
    }
    else{
      toast.error('Data not getting', {autoClose:10000}) 
    }

  //  {this.state.userdata.length != 0 ? toast.success('successful', {autoClose:2000}) :
  //  toast.error('Danger', {autoClose:10000}) 
  // }
}
    return (
                     <div >
<div className="table-responsive">          
    
<table className="table" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col">Date Of Birth</th>
      <th scope="col">Gender</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
   { userdata.length > 0 ? userdata.map((val)=>{
     console.log('Map Value', val)
      return(
        <tr>
          <td scope="row">{val.id}</td>
          <td>{val.userName}</td>
          <td>{val.userEmail}</td>
          <td>{val.gender}</td>
          <td>{val.contact}</td>
          <td>{val.dob}</td>
          <td><button type='button' onClick={() => delBtn(val.id,val.userName)} className="btn-1"><i className="fa fa-trash"></i></button></td>
          <td><button type="button" onClick={() => editBtn () } className="btn-1"><i className="fa fa-edit"></i></button></td>
        </tr>
      )
   })
   : <h1>Loading...</h1>}
  </thead>
 
</table>
      </div>

   
            </div>
        )
    }
export default UserList;

