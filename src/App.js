import React,{useState} from "react";
import Modal from "./Modal";
import './style.css';
import ListUsers from "./ListUsers";

function App() {

  const[modal,setModal]=useState(null);
  const[addUser,setAddUser]=useState([]);
  function clearField(){

    setAddUser([]);
    localStorage.removeItem('userName');
  }
 
  return (

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
      </tr>
     </thead>
     
     
        <ListUsers addUser={addUser}/>
     
     
     </table>





     </div>
     



     </div>
   
  );
}

export default App;
 