import React from 'react';

const Bouton = (props) => {
    return (
        <button onClick={props.clic} className={`w-50 text-light btn ${props.btnColor}`}>{props.children}</button>
    )
}

export default Bouton