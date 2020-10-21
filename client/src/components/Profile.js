import React,{useState} from 'react';
import '../App.css';
 
function Profile({loginInfo}) {
    
  return (
    <div className="profile"> 
     <h4>Hey {loginInfo} here is your Profile</h4>
    </div>
  );
}

export default Profile;
