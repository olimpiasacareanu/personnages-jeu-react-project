import React, {Component} from 'react'
import axios from 'axios'
import Perso from './Perso/Perso'

class ListePersonnages extends Component{
    state = {
        persosArray : null,
        nom : "",
        loading : false,
    }

    loadData = () => {
        axios.get("https://creaperso-24789-default-rtdb.europe-west1.firebasedatabase.app/persos.json")
            .then(reponse => {
                const persosArray = Object.values(reponse.data)
                this.setState({
                    persosArray, 
                    loading:false
                })
            })
            .catch(error=>{
                this.setState({loading : false})
        })
    }

    componentDidMount = () => {
        this.loadData()
    }

    componentDidUpdate = (oldProps, oldState)=>{
        if(oldProps.refresh !== this.props.refresh){
            this.loadData()

        }
        
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
                                    {...personnage.perso}
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