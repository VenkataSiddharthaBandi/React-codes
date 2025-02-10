
import React from 'react';
import {useState, useEffect} from 'react';
import {data} from './Data'

const userData = "https://jsonplaceholder.typicode.com/users";

const Practice = () =>{

    const [data,setData] = useState([]);
    const userHandler = async() =>{
        const response = await fetch(userData);
        const newData = await response.json();
        setData(newData);
    };

    
    useEffect(() =>{
        console.log(userHandler());
    },[data]);

    return (
        <div>
            {data.map((user) =>{
                return(
                    <div style = {{border:"1px solid black"}}className = "Special">
                        <h2 style = {{color:"blue"}}>{user.name}</h2>
                        <h3 style = {{color:"violet"}}>{user.email}</h3>
                    </div>
                )
            })};
        </div>
    );
};


export default Practice;
