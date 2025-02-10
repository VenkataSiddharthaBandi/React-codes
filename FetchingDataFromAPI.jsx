

import React from 'react';
import {useState,useEffect} from 'react';

const userData = "https://jsonplaceholder.typicode.com/posts"

const Sample = () =>{

    const [data,setData] = useState([]);

    const userHandler = async() =>{

        const response = await fetch(userData);
        const newData = await response.json();
        setData(newData);
    };

    useEffect(() =>{
        console.log(userHandler());
    },[]);

    return (
        <div>
            {data.map((user) =>{
                return(
                    <div style = {{border:"1px solid green"}}>
                        <h2 style = {{color:"blue"}}>{user.title}</h2>
                        <h3 style = {{color:"red"}}>{user.body}</h3>
                    </div>
                )
            })};
        </div>
    );
};

export default Sample;