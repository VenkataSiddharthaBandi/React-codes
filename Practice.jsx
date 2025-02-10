// Fetching data from API in React

import React from 'react';
import {useState, useEffect} from 'react';

const userData = "https://jsonplaceholder.typicode.com/posts"


const Practice = () =>{

    const [data,setData] = useState([]);

    const userHandler = async() =>{

        const response = await fetch(userData);
        const newData = await response.json();
        setData(newData);
    }

    useEffect(() =>{
        console.log(userHandler());
    },[])

    return (
        <div>
            {data.map((user) =>{
                return (
                    <div style = {{border:"1px solid green"}}>
                        <h3 style = {{color:"blue"}}>{user.title}</h3>
                        <h3 style = {{color:"red"}}>{user.body}</h3>
                    </div>
                )
            })};
        </div>
    );
}

export default Practice;