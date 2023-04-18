import React, {Component} from 'react'
import axios from 'axios'
import Perso from './Perso/Perso'

class ListePersonnages extends Component{
    state = {
        persosArray : null,
        nom : "",
        loading : false,
    }

    componentDidMount = () => {
        // this.setState({loading:true})
        axios.get("https://creaperso-24789-default-rtdb.europe-west1.firebasedatabase.app/persos.json")
            .then(reponse => {
                const persosArray = Object.values(reponse.data)
                // console.log(this.state.personnages)
                this.setState({
                    persosArray, 
                    loading:false
                })
            })
            .catch(error=>{
                this.setState({loading : false})
        })
    }

    render(){
        return (
            <>
                <div className="container">
                    <div className="row">
                    {this.state.persosArray && this.state.persosArray.map((personnage, key)=>{
                        return(
                            <div className="col-lg-6" key={key}>
                                <Perso 
                                    nom={personnage.nom} 
                                    force = {personnage.perso.force}
                                    agilite = {personnage.perso.agilite}
                                    intelligence = {personnage.perso.intelligence}
                                    imagePerso = {personnage.perso.image}
                                    imageArme = {personnage.perso.arme}
                                />
                            </div>
                        )
                    })}
                    </div>
                </div>
            </>
        )
    }
}

export default ListePersonnages