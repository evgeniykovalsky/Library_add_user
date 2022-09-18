import React,{useState, useEffect} from "react";
import Modal from "./Modal";
import './style.css';
import ListUsers from "./ListUsers";
import {Context} from './Context'

function App() {

  const[modal,setModal]=useState(null);
  const[addUser,setAddUser]=useState([]);
  
  useEffect(() => {    
 
    const userName = JSON.parse(localStorage.getItem('userName')) || [];
    if(userName!=null){
    setAddUser(userName);
      }
    
     
        
 },[]);
  function clearField(){

    setAddUser([]);
    localStorage.removeItem('userName');
  }
  const removeUser=id=>{
    setAddUser(addUser.filter(user=>{
      return user.id!==id;
    }));
    if(addUser.length>0){localStorage.setItem('userName',JSON.stringify(addUser)); }

  }


 
 
  return (
      <Context.Provider value={{removeUser}}>
    <div className="tableOfUsers">
    
    {/* <input type="button" onClick={setModal(false)} value="New User"/>  */}
    <button onClick={()=>{setModal(true)}}>Add New User</button>   
    <button onClick={clearField}>CLearStorage</button>

    <Modal modal={modal} setModal={setModal} addUser={addUser} setAddUser={setAddUser} />
   
     <div >
     <table className="table">
     <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Delete</th>
      </tr>
     </thead>
     
     
        <ListUsers addUser={addUser} setAddUser={setAddUser}/>
     
     
     </table>
     </div>
     </div>
     </Context.Provider>
  );
}

export default App;
 