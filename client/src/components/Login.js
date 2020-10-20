import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';
import {Button,FormGroup,Label,Input} from 'reactstrap';  
import axiosWithAuth from './axiosWithAuth'
 

function Login(props) {
 
  const history=useHistory();
 
  const [loginData,setLoginData]=useState({
    username:"",
    password:""
  }); 

  const[error,setError] =useState("");

  const handleChange=(e)=>{
    setLoginData({...loginData,
    [e.target.name]:e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axiosWithAuth()
    .post('/login',loginData)
    .then(res=>{
      console.log('loginData call success',res);
      window.localStorage.setItem('token', res.data)
      props.history.push('/protectedStrains');


    })
    .catch(err=>{
      console.log('error in loginData call',err);
      console.log("show user:", error);
      setError("Invalid Login name or Password");
      console.log('Login Failed for the User:',loginData.username);
    })
  }

  const routeToRegister=(e)=>{
     history.push('/register');
  }

  return (
      <form className="login-form"  
      onSubmit={handleSubmit}
      name="login"
      >
       <h2 className="text-center">Welcome !</h2>
       <FormGroup className="text-left">
        <Label htmlFor="username"> Email 
        <Input type="email"
        id="username"
        name="username"
        value={loginData.username}
        onChange={handleChange}
        placeholder="Enter your email"
        />
        </Label>
        </FormGroup>

        <FormGroup className="text-left">
        <Label htmlFor="password"> Password 
        <Input type="password"
        id="password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
        placeholder="Password"
        />
        </Label>
        </FormGroup>
      
       <Button className="btn-lg btn-dark btn-block"
       type="submit"
       >Log in</Button>
        <p className="pt-4">Haven't registered yet?
        <Button 
        className="ml-3"
        onClick={routeToRegister}
         >Register</Button>
         </p>
       
        <div className="text-center p-2">
          <a href="/forgot-password">Forgot Password</a>
        </div>
    </form>
  );
}

export default Login;
