import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // breve introduccion a useState
    // const [variable, metodo para actualziarlo ] = useState(valor inicial);
    const [age, setage] = useState(29);

    const birthday = () => {
        // actualizamos el State
        setage(age + 1)
    }

    return (
        <div>
            <h1> Hola {props.name} desde el componente funcional </h1>
            <h2> Tu edad es: {age} </h2>
            <div>
                <button onClick={birthday} >Cumpplir anios</button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
