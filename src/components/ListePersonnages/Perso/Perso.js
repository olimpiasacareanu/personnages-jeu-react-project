import React from 'react';
import Image1 from "../../../assets/images/persos/player1.png"
import Image2 from "../../../assets/images/persos/player2.png"
import Image3 from "../../../assets/images/persos/player3.png"
import Arme1 from "../../../assets/images/armes/arc.png"
import Arme2 from "../../../assets/images/armes/epee.png"
import Arme3 from "../../../assets/images/armes/fleau.png"
import Arme4 from "../../../assets/images/armes/hache.png"


const perso = (props) => {
    let imagePerso = ""
    switch(props.imagePerso){
        case 1 : imagePerso = Image1
        break
        case 2 : imagePerso = Image2
        break
        case 3 : imagePerso = Image3
        break
        default : console.log("Pas d'image")
    }

    let imageArme = ""
    switch(props.imageArme){
        case "hache" : imageArme = Arme4
        break
        case "epee" : imageArme = Arme2
        break
        case "fleau" : imageArme = Arme3
        break
        case "arc" : imageArme = Arme1
        break
        default : console.log("Pas de arme")
    }
    return(
        <div className="row">
            <div className="col-lg-6 " >
                <h2 >{props.nom}</h2>                                       
                <img src={imagePerso} alt={props.nom} />
            </div>
            <div className="col-lg-6">
                <h6>Force : {props.force}</h6>
                <h6>Agilite : {props.agilite}</h6>
                <h6>Intelligence : {props.intelligence}</h6>
                <div className="arme">
                    <img src={imageArme} alt={props.arme} />
                </div>
            </div>
        </div> 
    )
}

export default perso