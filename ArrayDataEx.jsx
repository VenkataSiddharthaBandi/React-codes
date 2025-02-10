

import React from 'react';


const ArrayDataEx = () =>{
    const sampleArray = ["Hello","This is Siddhartha",{age:19}];
    return (
        <div>
            <h1>{sampleArray[0]}<br></br>
                {sampleArray[1]}<br></br>
            </h1>
            
        </div>
    );
};

export default ArrayDataEx;