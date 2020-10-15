import React,{useState} from 'react';
import { Link,Route,useHistory } from "react-router-dom";
import '../App.css';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';  
import * as yup from "yup";
import axios from "axios";
 

function Login() {

  const [loginData,setLoginData]=useState({
    email:"",
    password:""
  }); 

  const[error,setError] =useState("");

  const handleChange=(e)=>{
    setLoginData({...loginData,
    [e.target.name]:e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("https://reqres.in/api/users",loginData)
    .then(res=>{
      console.log('loginData call success',res);
    })
    .catch(err=>{
      console.log('error in loginData call',err);
      setError("Invalid Login name or password");
      console.log('Login Failed for the User:',loginData.username);
    })
  }

  // const routeToRegister=(e)=>{
  //    history.push('/register');
  // }

  return (
    <>
      <Form className="login-form"
      onSubmit={handleSubmit}
      >
       <h2 className="text-center">Welcome !</h2>
       <FormGroup className="text-left">
        <Label htmlFor="email"> Email </Label>
        <Input type="email"
        id="email"
        name="email"
        value={loginData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        />
        
        </FormGroup>

        <FormGroup className="text-left">
        <Label htmlFor="password"> Password </Label>
        <Input type="password"
        id="password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
        placeholder="Password"
        />
        
        </FormGroup>
      
       <Button className="btn-lg btn-dark btn-block"
       type="submit"
       >Log in</Button>
        
        <Button  
        className="mt-3"
        // onClick={routeToRegister}
         >Register</Button>
       
        <div className="text-center p-3">
          {/* <a href="/register">Register</a> */}
          <span className="p-2">|</span> 
          <a href="/forgot-password">Forgot Password</a>
        </div>
    </Form>
    </>
  );
}

export default Login;
