

import React from 'react';
import {useEffect,useState} from 'react';

const UseEffectHookEx = () =>{
    const [city , setCity] = useState("Hyderabad");

            useEffect(() =>{
                if(city==="Hyderabad"){
                    setCity("Bengaluru")
                }
                else{
                    setCity("Delhi")
                }

            },[city])
    return (
        <div>
            <h1>{city}</h1>
            
        </div>
    )
}

export default UseEffectHookEx;
