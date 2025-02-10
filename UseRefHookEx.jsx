

import React from 'react';
import {useState, useEffect} from 'react';
import {useRef} from 'react';


const list = [];

const UseRefHookEx = () =>{

    const [number, setNumber] = useState(0);

    const reference = useRef({ name : "Siddhartha", age : 19 });

    list.push(reference);

    useEffect(() =>{
        if(list.length === 2){
            console.log(list);
            console.log(list[0] === list[1]);
        }
    },[]);

    const increment = () =>{
        setNumber(number+1);
    }

    return (
        <div>
            <h1>
                {number}
            </h1>
            <button onClick = {increment}>Increment</button>
        </div>
    );
}

export default UseRefHookEx;