import React from "react";

export default function ListUsersItem({id, user, phone}){

   
    return(
        <tr>
            <td>{id}</td>
            <td>{user}</td>
            <td>{phone}</td>
        </tr>
    )
}