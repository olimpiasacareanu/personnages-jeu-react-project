import React from 'react';
import Arme from './Arme/Arme';
import imageArme1 from '../../assets/images/armes/epee.png'
import imageArme2 from '../../assets/images/armes/fleau.png'
import imageArme3 from '../../assets/images/armes/arc.png'
import imageArme4 from '../../assets/images/armes/hache.png'

const armes = (props) => (
        <div className="container my-4">
            <div className="row text-center">
                {props.listeArmes?.map((arme, key)=>{   
                    let opacityImage = ''
                    props.currentArme === arme ?  opacityImage = 'opacity-100' : opacityImage = 'opacity-50'

                    let imgArme
                    switch(arme){
                        case "epee" : imgArme = imageArme1
                        break
                        case "fleau" : imgArme = imageArme2
                        break
                        case "arc" : imgArme = imageArme3
                        break
                        case "hache" : imgArme = imageArme4
                        break
                        default : console.log("Pas d'image")
                    }    
                    return (
                        <div className='col-3' key={key}>
                            <Arme 
                                opacityImg = {opacityImage}
                                selectArme={()=>props.choixArme(key)} img={imgArme}>{arme}
                            </Arme>
                        </div>
                    ) 
                })}
            </div>
        </div>
    )

export default armes