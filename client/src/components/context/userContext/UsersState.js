import React, { useReducer } from 'react';
import uuid from 'uuid';
import UserContext from './userContext';
import usersReducer from './usersReducer'
import axiosWithAuth from '../../axiosWithAuth'
import axios from 'react';
import { useHistory } from 'react-router-dom'
import {
    GET_USERS,
    ADD_USER,
    DELETE_USER,
    UPDATE_USER,
    SET_CURRENT,
    CLEAR_CURRENT,
    LOGIN_USER
} from '../types';

const UsersState = props => {
    const initialState = {
        users: [],
        credentials: {
            email: '',
            password: '',
            username: '',
            state_abbreviation: ''
        },
        loginData : {
            username: '',
            password: ''
        },
        current: null
    }
    


const [ state, dispatch ] = useReducer(usersReducer, initialState)

const url = 'https://med-cab-bw.herokuapp.com'

const history= useHistory()

const getUsers = () => {
        
        axiosWithAuth()
        .get(`${url}/api/users/`)
        .then(res => {
            console.log('this is the error', res.data)
            dispatch({type: GET_USERS, payload: res.data })
        })

}

const setCurrentUser = user => {
  dispatch({ type: SET_CURRENT, payload: user})
}

const clearCurrentUser = () => {
    dispatch({ type: CLEAR_CURRENT})
  }

const addUser = (credentials) => {
    axiosWithAuth()
       .post(`${url}/api/auth/register`, credentials)
       .then(res => {
         
           localStorage.setItem('token', res.data.token)
           history.push('/protectedUsers')
       })
       .catch(err => console.log(err))
}

const loginUser = (credentials)=> {
    axiosWithAuth()
    .post(`${url}/api/auth/login`,credentials)
    .then(res=>{
      console.log('loginData call success',res);
      // setLoginInfo(res.data);
      window.localStorage.setItem('token', res.data.token)
      //console.log('props:', props);
      history.push('/protectedUsers');

    })
}

const updateUser = (user, id) => {
    axiosWithAuth()
        .put(`${url}/api/users/${user.id}`, user)
        .then(res => {
            console.log('this is the error', res.data)
            dispatch({type: UPDATE_USER, payload: res.data })
        })
}

const deleteUser = ( id, user) => {
    axiosWithAuth()
        .delete(`https://med-cab-bw.herokuapp.com/api/users/${id}`, user)
        .then(res => {
            console.log('this is the error', res.data)
            dispatch({type: DELETE_USER, payload: id })
        })
}




return (
    <UserContext.Provider
    value = {{
        users: state.users,
        current: state.current,
        credentials: state.credentials,
        getUsers, 
        updateUser,
        deleteUser,
        setCurrentUser,
        clearCurrentUser,
        addUser,
        loginUser
     }}
    >
       {props.children}
    </UserContext.Provider>
)

}

export default UsersState