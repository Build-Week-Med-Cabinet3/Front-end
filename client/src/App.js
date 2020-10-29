import React,{useState} from 'react';
import {Link, Route,Switch} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { PrivateRoute } from './components/PrivateRoute'

import Users from './components/Users';
import Profile from './components/Profile';
import UsersState from './components/context/userContext/UsersState'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
   // temporary state used to display response from API.  
   const [post, setPost] = useState([]);
   const [loginInfo,setLoginInfo]=useState([]);

   console.log('post value in app js',post)
   console.log('loginInfo value in app js',loginInfo)
  return (
    
    <div className="App">
      
      <Router>
      <nav>
        <a href="https://med-cabinet-marketing.netlify.app/"
        className="logo">Med Cab
        </a>
          <h4 className="tag">Quality Cannabis Strains and Products!</h4>
        <div className="navLinks">
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/users">Users</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
      
      <Switch>
      <UsersState>
        <Route path="/register">
          <Register setPost={setPost}/>
        </Route>
        

        <Route exact path="/">
         <Login setLoginInfo={setLoginInfo}/>
        </Route>
       
        <PrivateRoute path="/protectedUsers" component={Users}/>
        </UsersState>
        <Route path="/profile">
          <Profile loginInfo={loginInfo} />  
        </Route>  
      </Switch>
      </Router>
     
    </div>
   
  );
}

export default App;
