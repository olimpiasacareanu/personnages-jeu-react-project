import React from 'react';
import styles from "./TitreH1.module.css"

const titreH1 = (props) => {
    return (
        <h1 className={`text-light p-3 bg-accent text-center ${styles.fontTitle}`} onClick={props.click}>{props.children}</h1>
    )

}


export default titreH1