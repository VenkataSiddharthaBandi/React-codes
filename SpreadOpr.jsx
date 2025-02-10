

import React from 'react';

const SpreadOpr = () =>{

    const myDetails = ["Siddhartha",19,"Male"];
    const SpdOpr = [...myDetails];
    return (
        <div>
            <h1>{SpdOpr}</h1>
            
        </div>
    );
};

export default SpreadOpr;