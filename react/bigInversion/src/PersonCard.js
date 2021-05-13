import React from '../node_modules/react'


const PersonCard  = props =>  {     
        const personData = props;
        
        return (
            <div class="card">
            <div>
                <h1> {personData.name} </h1>
                <p> Age: {personData.age}</p>
                <p> Hair Color: {personData.hairColor}</p>

            </div>
          
        </div>
        )
    }

export default PersonCard