

import React from 'react';
import {useState,useEffect} from 'react';

const EventListEx = () =>{

    const [screenSize,setScreenSize] = useState({
        width : window.innerWidth,
        height : window.innerHeight
    });

    const updateScreenSize = () =>{
        setScreenSize({
        width : window.innerWidth,
        height : window.innerHeight
        });
    };

    useEffect(() =>{

        window.addEventListener("resize",updateScreenSize);

        return() =>{
            window.removeEventListener("resize",updateScreenSize);
        };

    },[]);

    return (
        <div className = "Sample">
            <h1>Screen size example</h1>
            <h1>Resize the window to update the value</h1>
            <h1 style = {{color:"blue"}}>Width : {screenSize.width}</h1>
            <h1 style = {{color:"red"}}>Height : {screenSize.height}</h1>
        </div>
    );
};

export default EventListEx;