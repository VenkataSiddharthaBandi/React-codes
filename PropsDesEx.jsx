
import React from 'react'

const PropsDesEx = (props) => {
    
    const {name , year , cost} = props.myCar
    console.log(props)

    return (
        <div className = "Container">
            <div>{name}</div>
            <div>{year}</div>
            <div>{cost}</div>
        </div>
    )
}

export default PropsDesEx;