import React, {useState, useEffect} from "react";


export default function DataArea(){
    const [users, setUsers] = useState([{}]);
    const [order, setOrder]= useState("descend");
    const [filteredUsers, setFilteredUsers]= useState([{}])


const headings = [
    {name: "Image", width: "10%"},
    {name: "Name", width: "10%"},
    {name: "Phone", width: "20%"},
    {name: "Email", width: "20%"},
    {name: "DOB", width: "10%"},
]

const handleSort = heading =>{
    if (order === "descend"){
        setOrder("ascend")
    }
    else{
        setOrder("descend")
    }

    const sortedUsers = filteredUsers.sort(compareFnc);
    setFilteredUsers(sortedUsers);
}

const handleSearchChange = event =>{
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = users.filter()
}

useEffect(()=>{
API.getUsers().then(results=>{
    setState({
        setUsers(results.data.results)
        setFilteredUsers(results.data.results)
    }); 
},[])
}
