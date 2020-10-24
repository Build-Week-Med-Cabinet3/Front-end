import React,{useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';  
import axios from "axios";
import { gsap } from "gsap";
// import { gsap } from "gsap/dist/gsap";


function Login({setLoginInfo}) {
  console.log('login props:',setLoginInfo);
  const history=useHistory();

  useEffect(()=>{
    gsap.from(".login-form",{scale:1,duration: 1,x:25,ease:"slow" })
  });
  
  const [loginData,setLoginData]=useState({
    username:"",
    password:""
  }); 

  const[error,setError] =useState("");

  const handleChange=(e)=>{
    setLoginData({...loginData,
    [e.target.name]:e.target.value});
  }

  const url = 'https://medcabinet3.herokuapp.com';

  const handleSubmit=(e)=>{
    e.preventDefault();
    //animate login form
    // gsap.to(".login-form",{duration:1, x:10,
    //   rotation: 50,borderRadius:"2%",border:"5px solid darkolivegreen",ease:"slow"});
    axios
    .post(`${url}/api/auth/login`,loginData)
    .then(res=>{
      console.log('loginData call success',res);
      setLoginInfo(res.data.message);
      window.localStorage.setItem('token', res.data)
      //console.log('props:', props);
      history.push('/protectedStrains');

    })
    .catch(err=>{
      console.log('error in loginData call',err);
      setError("Invalid Login name or Password");
      console.log('Login Failed for the User:',loginData.username);
    })
  }

  const routeToRegister=(e)=>{
     history.push('/register');
  }

  return (
    <> 
    <Form className="login-form"  
      onSubmit={handleSubmit}
      name="login"
      >
       <h2 className="text-center">Welcome !</h2>
       <FormGroup className="text-left">
        <Label htmlFor="username"> UserName </Label>
        <Input type="text"
        id="username"
        name="username"
        value={loginData.username}
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
        <p className="pt-4">Haven't registered yet?
        <Button 
        className="ml-3"
        onClick={routeToRegister}
         >Register</Button>
         </p>
       
        <div className="text-center p-2">
          <a href="/forgot-password">Forgot Password</a>
        </div>
    </Form>
    </>
  );
}

export default Login;
