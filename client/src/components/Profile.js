import React,{useState} from 'react';
import '../App.css';
import info from '../data';
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap'; 
 
function Profile({loginInfo}) {
  const [infos]=useState(info);
 
  console.log(infos.name);  
  return (
    <div className="profile"> 
     <h4>Hey {loginInfo} ! Some of the strains you might like...</h4>
     <Card>
     {infos.map((item,i)=> {
        return(
          <CardBody>
          <CardTitle><h7>{item.name}</h7></CardTitle>
          <CardImg topwidth="100%" src={item.img}/>
          <CardSubtitle><h5 className='mt-3'>Type: {item.type}</h5></CardSubtitle>
          <CardText>{item.description}</CardText>
          </CardBody>)})
      }
      </Card>
    </div>
  );
}

export default Profile;
