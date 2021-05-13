import {Card} from 'react-bootstrap'
import React,{useState, useEffect} from "react";


function EmployeeCard() {
    const[employeeTable, setEmployeeTable] = useState([]);
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then((data)=>setEmployeeTable(data.results)
               
        )
    },[])
    console.log(employeeTable)
  return (
    employeeTable.map((employee)=>{
      return(
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={employee.picture.large} />
    <Card.Body>
      <Card.Title>
          {employee.name.first} {employee.name.last}
      </Card.Title>
      <Card.Text>
        Email: {employee.email}
        Phone Number: {employee.phone}
      </Card.Text>
    </Card.Body>
  </Card>
   ) })
    
  );
}

export default EmployeeCard;
