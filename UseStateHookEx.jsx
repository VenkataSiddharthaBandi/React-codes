

import React from 'react';
import {useState} from 'react';

const UseStateHookEx = () =>{

    const [city , setCity] = useState("Hyderabad");
    console.log(city);

    return (
        <div>
            <h1>
                {city}
            </h1>
        </div>
    );
};

export default UseStateHookEx;