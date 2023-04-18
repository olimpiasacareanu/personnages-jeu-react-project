import React from 'react';
import ImagePerso from './ImagePerso/ImagePerso';
import CaracPerso from './CaracPerso/CaracPerso';
import Armes from '../../Armes/Armes';

const Personnage = (props) => {
    return (
        <>
            <div className='row'>
                <div className='col-6'>
                    <ImagePerso 
                        numImage={props.image} 
                        nextImage={props.nextImageChange} 
                        prevImage={props.prevImageChange} 
                    />
                </div>
                <div className='col-6'>
                    <CaracPerso 
                        force = {props.force}
                        agilite = {props.agilite}
                        intelligence = {props.intelligence}
                        pointsRestants = {props.nbPointsDisponibles}
                        addPoints = {props.addPoints}
                        deletePoints = {props.deletePoints}
                    />
                </div>
            </div>
            <div>
                <Armes />
            </div>
        </>
    )
}

export default Personnage