import React, { useState, useEffect, useContext} from 'react'
import UserForm from './UserForm'
import axios from 'react'
import UserContext from '../components/context/userContext/userContext'


function Users() {
const userContext = useContext(UserContext)

const { getUsers, users, editUser, deleteUser, setCurrentUser, clearCurrentUser} = userContext;

useEffect(()=> {
   getUsers()
   
}, []);

const onDelete = (id) => {
    deleteUser();
    clearCurrentUser()
}



    return (
       
        <div className="form-container">
            <h1>Hello</h1>
            <div>
            <UserForm/>
            </div>
            {users.map(user => (
                <div className="card">
                    <h2>{user.username}</h2>
            <p>{user.email}</p>
            <p>{user.state_abbreviation}</p>
            <button onClick={()=>setCurrentUser(user)}>EDIT</button>
            <button onClick={deleteUser}>DElETE</button>
                </div>
            ))}
          <button onClick={()=>getUsers(users)}>GetUSERS</button>
        </div>
    )
}

export default Users
