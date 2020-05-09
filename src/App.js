import React, { useState , useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

//import UserObject from "./user";
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

   // const fetchFromFireStore=async() => {
    //  const response =await fetch(`http://localhost:8080/getUserDetails/${Uname}`);
      //const data =await response.json();
     // setUsers(data);
     // console.log(data);
   // };
    
    const saveNameFuction= e =>{
     // console.log(nameValue);
      setname(e.target.value);
      console.log(sname);   
    };

    
    const saveLocationFuction= e =>{
      // console.log(nameValue);
      setlocation(e.target.value);
       console.log(slocation);   
     };


     
    const saveAgeFuction= e =>{
      // console.log(nameValue);
      setlocation(e.target.value);
       //console.log(slocation);   
     };
     //const savedata= async()=>{
      //const response= await axios.post(`http://localhost:8080/createUser`,{

     //  });
   // }
     const saveage=(e)=>{
       e.preventDefault();
       let age=sage;
       console.log(age);
       console.log(slocation);
     };

  return (
    <div className="app">
      {
        //(<UserObject name={user.name} location={user.location} age={user.age} />)
      }
      <div className="saveForm">
        <form onSubmit={saveage}>
          <label>Name:</label><br/>
          <input type='text' name='name' value={sname} onChange={saveNameFuction} /><br/>
          <label>Location: </label><br/>
          <input type='text' name='location' value={slocation} onChange={saveLocationFuction}/><br/>
          <label>age</label><br/>
          <input type='text' name='age' value={sage} onChange={e=>{setage(e.target.value)}}/><br/>
          <button type='submit' value='submit'onSubmit={saveage}/>
        </form>
      </div>
    </div>

  );
}

export default App;