import React from 'react';
import Layout from '../Layout/index';
import axios from "axios"
import { json } from 'react-router-dom';

const Home = () => {
const fetchAPIs=async ()=>{
 const token=window.localStorage.getItem("token")
 alert(token)
    try{
        const apiUrl = '/api/DocumentManagement/GetLast30DaysDocumentRequests';
      
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });
        
          const responseData = await response.json();
          alert(JSON.stringify(responseData))
         //res.send("verified")
      }
    catch(error){
alert()
    }
   
    
}

const fetchToken=()=>{
    axios.get("http://localhost:3000/token").then((res)=>{

if(res&&res.data&&res.data.token){
   window.localStorage.setItem("token",res.data.token)
}

    }).catch(error=>{
        alert("error")
    })
}
    return(<Layout>
       Home
       
       <button onClick={()=>fetchAPIs()}>GetLast30DaysDocumentRequests </button>
       <button onClick={()=>{fetchToken()}}>FetchTocken</button>

    </Layout>);
};
export default Home
