import React from 'react';
import Form from './Form';

const Modal = ({modal,setModal, addUser, setAddUser}) => {

    if(modal===null){
        return;
    }

    return (
<>
       

        <div className="overlay" >
            <div className="modal__window">
            <h3>New visitor</h3>
                      
           <Form addUser={addUser} setAddUser={setAddUser} />
           <button id="close" onClick={()=>{setModal(null)}}>Close</button>
                
           
            </div>
        </div>
        </>
    )
}

export default Modal;