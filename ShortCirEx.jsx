
import React from 'react';
import {useState} from 'react';


const ShortCirEx = () =>{
    const [game,setGame] = useState("Cricket");
    return (
        <div>
            {game=="Cricket" && <h1>I like Cricket</h1>}
        </div>
    );
};

export default ShortCirEx;