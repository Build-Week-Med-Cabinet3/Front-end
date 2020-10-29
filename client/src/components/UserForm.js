import React, { useState, useContext, useEffect } from 'react'
import UserContext from '../components/context/userContext/userContext'

export const UserForm = () => {
    const userContext = useContext(UserContext)

    const { current, updateUser } = userContext

    useEffect(() => {
        if (current !== null) {
          setUser(current);
        } else {
          setUser({
            username: '',
            email: '',
            state_abbreviation: ''
          });
        }
      }, [userContext, current]);


    const [user, setUser ] =useState({
        username: '',
        email: '',
        state_abbreviation: ''
    })

    

    const { username, email, state_abbreviation} = user

    

    const onChange = e => setUser({...user, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault();
        updateUser(user)
        // setUser({
        //     username: '',
        //     email: '',
        //     state_abbreviation: ''
        // })
    }
    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">ADD USER</h2>
            <input
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={onChange}
             />
              <input
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={onChange}
             />
              <input
            type="text"
            placeholder="State"
            name="state_abbreviation"
            value={state_abbreviation}
            onChange={onChange}
             />
             <button onClick={updateUser}>Update</button>
        </form>
    )
}

export default UserForm
