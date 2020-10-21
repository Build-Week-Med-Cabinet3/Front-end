import React,{useState} from 'react';
import {Link, Route,Switch} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { PrivateRoute } from './components/PrivateRoute'
import StrainSelection from './components/StrainSelection'
import Strains from './components/Strains';
import Profile from './components/Profile';

function App() {
   // temporary state used to display response from API.  
   const [post, setPost] = useState([]);
   const [loginInfo,setLoginInfo]=useState([]);

   console.log('post value in app js',post)
   console.log('loginInfo value in app js',loginInfo)
  return (
    <div className="App">
      <nav>
        <h1 className="logo">Med Cab</h1>
          <h4 className="tag">Quality Cannabis Strains and Products!</h4>
        <div className="navLinks">
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/strain">Strain</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/register">
          <Register setPost={setPost}/>
        </Route>
        

        <Route exact path="/">
         <Login setLoginInfo={setLoginInfo}/>
        </Route>

        <PrivateRoute path="/protectedStrains" component={Strains}/>

        <Route path="/profile">
          <Profile loginInfo={loginInfo} />  
        </Route>  
      </Switch>
    
    </div>
  );
}

export default App;
