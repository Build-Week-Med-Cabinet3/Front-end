import React, { useState, useContext, useEffect } from 'react';
import axiosWithAuth from './axiosWithAuth';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import  UserContext from '../components/context/userContext/userContext'


export const Register = ({setPost}, props) => {
    const userContext = useContext(UserContext)
    const [credential, setCredential ] = useState({
        
        email: '',
        password: '',
        username: '',
        state_abbreviation: ''
        
    });

    const { addUser, current, credentials } = userContext


  

    const history = useHistory()

    const url = 'https://med-cab-bw.herokuapp.com'

    const { email, password, username, state_abbreviation } = credential;

    const onChange = e => {
        
        setCredential({
            ...credential,
        [e.target.name]: e.target.value
        })
    }

    const signUpSubmit = (e) => {
        e.preventDefault();
        addUser(credential)
    //    axios
    //    .post(`${url}/api/auth/register`, credentials)
    //    .then(res => {
    //      setPost(res.data)
    //        localStorage.setItem('token', res.data.token)
    //        history.push('/protectedUsers')
    //    })
    //    .catch(err => console.log(err))
    }
    
    return (
        <div className="form-container">
       <form onSubmit={signUpSubmit}>
           <h2 className="text-primary">Sign-Up</h2>
           
          
             <input
            name="username"
           type="text"
           placeholder="username"
           value={username}
           onChange={onChange}
           />
            <input
           name="email"
           type="email"
           placeholder="email"
           value={email}
           onChange={onChange}
           />
            <input
            name="password"
           type="password"
           placeholder="password"
           value={password}
           onChange={onChange}
           />
           <input
           name= "state_abbreviation"
           type='text'
           placeholder='state'
           value={state_abbreviation}
           onChange={onChange}
           />


          
          
           
           <div>
               <input
               type="submit"
               value="Sign-up"
               className="btn btn-block bg-dark"
               />
           </div>

       </form>
       </div>
    )
}

export default Register;
