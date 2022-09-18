import React,{useEffect,useState} from "react";

export default function Form({addUser,setAddUser}){
    const nameField = React.useRef(null);
    const phoneField = React.useRef(null);
      
   

    useEffect(()=>{
      if(addUser.length>0){
      localStorage.setItem('userName',JSON.stringify(addUser)); 
      console.log("Saved!");
      }
    },[addUser]);

    const addUsers = (event) =>{
      event.preventDefault();
      let warningText=document.querySelector('#warning');
      if(nameField.current.value!='' && phoneField.current.value!='')
      {
      setAddUser([...addUser,{
        id:Date.now(),
        user:nameField.current.value,
        phone:phoneField.current.value 
      }])
      warningText.innerText="";
      }
      else{
        warningText.innerText="Enter fields please!!!";
      
      }

      nameField.current.value='';
      phoneField.current.value='';

    };
  
    
    return(
            <form onSubmit={(e)=>{addUsers(e)} }>
            <p id="warning"> </p>
            <p>Name</p> 
             <input type="text" ref={nameField}/>
            <p>Phone</p>
             <input type="text" ref={phoneField}/>
             <input id="save" type="submit" value="Save"/>
             </form>

    );
}