import React,{useState} from 'react';
import {BrowserRouter as Router, Link, Route,Switch} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { PrivateRoute } from './components/PrivateRoute'
import StrainSelection from './components/StrainSelection'

function App() {
   // temporary state used to display response from API.  
   const [post, setPost] = useState([]);
   console.log('post value in app js',post)

  return (
    <Router>
    <div className="App">
      <nav>
        <h1 className="logo">Med Cab</h1>
          <h4 className="tag">Quality Cannabis Strains and Products</h4>
        <div className="navLinks">
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/register">
          <Register setPost={setPost}/>
        </Route>
        

        <Route path="/">
        <Login />
        </Route>
        <PrivateRoute path="/protectedStrains" component={StrainSelection}/>
      </Switch>
    
    </div>
    </Router>
  );
}

export default App;
