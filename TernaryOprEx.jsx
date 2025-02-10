

import React from 'react';

const TernaryOprEx = () =>{
    const a = 10;
    const result = (a===10);


    return (
        <div>
            <h1>{result ? "a value is 10" : "a value is not equal to 10"}

            </h1>
        </div>
    );
};

export default TernaryOprEx;