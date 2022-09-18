import React from "react";
import ListUsersItem from "./ListUsersItem";

export default function ListUsers({addUser}){

    
    return(
     <tbody>
     {addUser.map(item => <ListUsersItem {...item} key={item.id} /> )}
     </tbody>
    );
  

       
}