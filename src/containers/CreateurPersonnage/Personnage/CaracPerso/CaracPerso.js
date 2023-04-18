import React, {Component} from 'react'
import Carac from './Carac/Carac'
class CaracPerso extends Component{
    render(){
        return (
            <>
                <h5>Points restants : {this.props.pointsRestants}</h5>
                <Carac nbPoints = {this.props.force} addPoints={()=>this.props.addPoints('force')} deletePoints={()=>this.props.deletePoints('force')} >Force</Carac>
                <Carac nbPoints= {this.props.agilite} addPoints={()=>this.props.addPoints('agilite')} deletePoints={()=>this.props.deletePoints('agilite')} >Agilité</Carac>
                <Carac nbPoints={this.props.intelligence} addPoints={()=>this.props.addPoints('intelligence')} deletePoints={()=>this.props.deletePoints('intelligence')} >Intelligence</Carac>
            </>
        )
    }
}

export default CaracPerso