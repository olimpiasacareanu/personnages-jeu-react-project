import React from 'react';

const Arme = (props) =>{
    return (
    
        <div onClick={props.selectArme} >
            <img className={props.opacityImg} src={props.img} alt="{props.children}" />
            <h5>{props.children}</h5>
        </div>
    
    )
}

export default Arme