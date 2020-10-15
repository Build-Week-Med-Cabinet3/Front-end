import React,{useState} from 'react';
import {Link,Route,Switch} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {
   // temporary state used to display response from API.  
   const [post, setPost] = useState([]);
   console.log('post value in app js',post)

  return (
    <div className="App">
      <nav>
        <h1 className="logo">Med Cab</h1>
        <div className="navLinks">
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/register">
          <Register />
        </Route>

        <Route path="/">
        <Login />
        </Route>
      </Switch>
    
    </div>
  );
}

export default App;
