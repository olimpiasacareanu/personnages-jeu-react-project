import React, {Component} from 'react'
import classe from "./Carac.module.css"

class Carac extends Component{
    render(){
        let pointsVie = []
        for(let i =0; i<this.props.nbPoints; i++){
            pointsVie.push(<div key={i} className={[classe.pointVie].join(' ')}></div>)
        }
        return (
            <>
                <div className={[classe.carac].join(' ')}>
                    <div className={classe.minus} onClick={this.props.deletePoints}></div>
                    <div className="caracTitre"><h5>{this.props.children}</h5></div>
                    {pointsVie}
                    <div className={classe.plus} onClick={this.props.addPoints}></div>
                </div>
            </>
        )
    }
}

export default Carac