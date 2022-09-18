import React from "react";
import { Context } from "./Context";
import { useContext } from "react";


export default function ListUsersItem({id, user, phone}){

        const {removeUser} =useContext(Context);
   
    return(
        <tr>
            <td>{id}</td>
            <td>{user}</td>
            <td>{phone}</td>
            <td><input type="button" value="delete" onClick={()=>removeUser(id)}/></td>
        </tr>
    )
}