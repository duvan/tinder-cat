import React from 'react'
import { InterestOne } from './InterestOne'
import { INTERESTS } from '../../../../data/db'

export const Interest = () => {

    return (
        <div className="interest-container">
            <h3> Interest List </h3>
            <hr />
            <div className="interests-box">
                {
                    INTERESTS.map( (item, key) => <InterestOne key={ key } name={ item.name } status={ item.status } /> )
                }
            </div>
            <br />
            <h3> Que estas buscando? </h3>
            <div className="input-custom-l radibuttons">
                        <input type="radio" name="genero" value="hombre" /> Gato 
                        <input type="radio" name="genero" value="mujer" /> Gata 
                        <input type="radio" name="genero" value="otro" /> Otro
            </div>    
        </div>
    )
}