import React,{useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';  
import axios from "axios";
import  UserContext from '../components/context/userContext/userContext'
// import { gsap } from "gsap/dist/gsap";
 
function Login({setLoginInfo}) {
  console.log('login props:',setLoginInfo);
  const userContext = useContext(UserContext)
  const history=useHistory();
  
  const [credentials,setCredentials]=useState({
    username:"",
    password:""
  }); 

  const { loginUser } = userContext

  const { username, password } = credentials

  const[error,setError] =useState("");

  const handleChange=(e)=>{
    setCredentials({...credentials,
    [e.target.name]:e.target.value});
  }

  const url = 'https://med-cab-bw.herokuapp.com';

  const handleSubmit=(e)=>{
    e.preventDefault();
    loginUser(credentials)
    //animate login form
    // gsap.to(".login-form",{duration:1, x:10,
    //   rotation: 50,borderRadius:"2%",border:"5px solid darkolivegreen",ease:"slow"});
    // axios
    // .post(`${url}/api/auth/login`,credentials)
    // .then(res=>{
    //   console.log('loginData call success',res);
    //   // setLoginInfo(res.data);
    //   window.localStorage.setItem('token', res.data.token)
    //   //console.log('props:', props);
    //   history.push('/protectedUsers');

    // })
   
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
        value={username}
        onChange={handleChange}
        placeholder="Enter your email"
        />
        </FormGroup>

        <FormGroup className="text-left">
        <Label htmlFor="password"> Password </Label>
        <Input type="password"
        id="password"
        name="password"
        value={password}
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
