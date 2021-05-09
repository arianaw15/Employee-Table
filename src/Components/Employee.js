import React, { useState, useEffect } from 'react'

function Employee() {
    const[name, setName] = useState("");
    useEffect(()=>{
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(
            (result)=>{
                setName(result.results[0].name.first);
                console.log(result)
            },
        )
    },[])


    return (
        <div>
            {name}
        </div>
    )
}

export default Employee
