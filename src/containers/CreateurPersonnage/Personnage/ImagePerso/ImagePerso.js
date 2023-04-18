import React, {Component} from 'react';
import classe from './ImagePerso.module.css'
import ImagePlayer1 from "../../../../assets/images/persos/player1.png"
import ImagePlayer2 from "../../../../assets/images/persos/player2.png"
import ImagePlayer3 from "../../../../assets/images/persos/player3.png"

class ImagePerso extends Component{
    render(){
        let imageToPrint=""
        switch(this.props.numImage){
            case 1 :imageToPrint = ImagePlayer1 
                break
            case 2 : imageToPrint = ImagePlayer2
                break
            case 3 : imageToPrint = ImagePlayer3
                break
            default : console.log("Pas d'image")
        }

        return (
            <>
                <div className='row'>
                    <div className='col-4'>
                        <div className={classe.prev} onClick={this.props.prevImage}></div>
                    </div>
                    <div className='col-4'>
                        <img src={imageToPrint} alt="perso" />
                    </div>
                    <div className='col-4'>
                        <div className={classe.next} onClick={this.props.nextImage}></div>
                    </div>
                </div>
            </>
        )
    }
}

export default ImagePerso
