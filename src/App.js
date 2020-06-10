import React, { useState , useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import UserObject from "./user";
function App() {
  const Uname='raj';
  const [user,setUsers]=useState('');
  const [sname,setname]=useState("");
  const [slocation,setlocation] =useState("");
  const [sage,setage]=useState("");
  const[submit,savesubmit]=useState("");
  //const [saveuser,setuser]=useState('');
  useEffect(()=> {
   // fetchFromFireStore();
    
  },[]);

    const fetchFromFireStore=async() => {
      const response =await fetch(`http://localhost:8080/getUserDetails/${Uname}`);
      const data =await response.json();
      setUsers(data);
      console.log(data);
   };
    
    const saveNameFuction= e =>{
      setname(e.target.value);
    };

    
    const saveLocationFuction= e =>{
      setlocation(e.target.value);
     };

     const saveAgeFuction= e =>{
      setage(e.target.value);
     };
    
     const savedata= async()=>{
      const postTest={name:sname,location:slocation,age:sage};
      //console.log(postTest);
      const response= await axios.post(`http://localhost:8080/createUser`,postTest);
      console.log(response);
      
    }
     const saveDataFuction=(e)=>{
       e.preventDefault();
        savedata();
      };
  return (
    <div className="app">
      {
        //(<UserObject name={user.name} location={user.location} age={user.age} />)
      }
      <div className="saveForm">
        <form onSubmit={saveDataFuction}>
          <label>Name:</label><br/>
          <input type='text' name='name' value={sname} onChange={saveNameFuction} /><br/>
          <label>Location: </label><br/>
          <input type='text' name='location' value={slocation} onChange={saveLocationFuction}/><br/>
          <label>age</label><br/>
          <input type='text' name='age' value={sage} onChange={saveAgeFuction}/><br/>
          <button type='submit' value='submit'/>
        </form>
      </div>
    </div>

  );
}

export default App;