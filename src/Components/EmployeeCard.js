import {Card,Button} from 'react-bootstrap'
import React,{useState, useEffect} from "react";


function EmployeeCard() {
    const[name, setName] = useState("");
    const[img, setImg] = useState('');
    useEffect(()=>{
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(
            (result)=>{
                setName(result.results[0].name.first);
                setImg(result.results[0].picture.large);
                console.log(result)
            },
        )
    },[])
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>
        {name}
    </Card.Title>
    <Card.Text>
      Email, Phone
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  );
}

export default EmployeeCard;
