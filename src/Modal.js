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
           <input id="close" type="button" value="Close" onClick={()=>{setModal(null)}}/>
                
           
            </div>
        </div>
        </>
    )
}

export default Modal;