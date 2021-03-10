import axios from 'axios'
import React, {useState, useEffect}from 'react'

const NavBar = () =>{
const [fetchdata, setFetchdata] = useState([])
const [apiData, setApiData] = useState([])
useEffect(() => {
    // fetch('http://localhost:8000/user')
    //     .then((response) => {
    //     response.json().then((result) =>{
    //    //     console.warn(result)
    //        setApidata(result)
    //        console.log(fetchdata)
            
    //     })    
    axios.get('http://localhost:8000/user').then((resp)=>{
        setFetchdata(resp.data)
        appData();
        //console.warn(fetchdata);
    })
      
     
 }, [])
 
const appData = () => {
    setApiData(fetchdata)
    console.log('sdfsfd ',apiData)

}

                         
    return (
        <div>
            {
                fetchdata.map((lit)=>{
                    return(<h1>{lit.FirstName}</h1>)
                     
                })
             }
            
        </div>
    )
}

export default NavBar
