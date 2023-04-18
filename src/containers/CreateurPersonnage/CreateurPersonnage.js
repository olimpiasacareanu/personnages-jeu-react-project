import React, {Component} from 'react'
import '../../App.css'
import TitreH1 from '../../components/TitreH1/TitreH1'
import Bouton from '../../components/Bouton/Bouton'
import Personnage from './Personnage/Personnage'
import Armes from '../Armes/Armes'
import axios from 'axios';

class CreateurPersonnage extends Component{
    state = {
        personnage : {
            image : 1,
            force : 0,
            agilite : 0,
            intelligence : 0,
            arme : null
        },
        nbPointsDisponibles : 7,
        armes : null,
        loading : false,
        nom : ""
    }

    componentDidMount = () => {
        this.setState({loading:true})
        axios.get("https://creaperso-24789-default-rtdb.europe-west1.firebasedatabase.app/armes.json")
            .then(reponse => {
                const armesArray = Object.values(reponse.data)
                this.setState({
                    armes:armesArray,
                    loading : false
                })
            })
            .catch(error=>{
                this.setState({loading : false})

            })
    }
    handleNextImage=()=>{
        this.setState(oldState=>{
            const newPersonnage = {...oldState.personnage}
            if(oldState.personnage.image >= 3) newPersonnage.image = 1
            else newPersonnage.image++
            return {personnage : newPersonnage}
        })
    }

    handlePrevImage=()=>{
        this.setState(oldState=>{
            const newPersonnage = {...oldState.personnage}
            if(oldState.personnage.image <=1) newPersonnage.image = 3
            else newPersonnage.image--
            return {personnage : newPersonnage}
        })
    }

    handleAddPoints = (carac)=>{
        this.setState(oldState=>{
            const newPerso = {...oldState.personnage}
            let newPoints = oldState.nbPointsDisponibles
            if(newPoints > 0 && oldState.personnage[carac] !== 5){
                newPerso[carac]++
                newPoints--
            }else{
                return null
            }
            return {personnage : newPerso,
                    nbPointsDisponibles : newPoints
            }
        })
    }

    handleDeletePoints = (carac) =>{
        this.setState(oldState=>{
            const newPerso = {...oldState.personnage}
            let newPoints = oldState.nbPointsDisponibles
            if(newPerso[carac] !== 0 && newPoints <7){
                newPerso[carac]--
                newPoints++
            }else{
                return null
            }
            return {personnage : newPerso,
                nbPointsDisponibles : newPoints
            }
        })
    }
    handleSelectArme = (key)=>{
        this.setState(oldState => {
            const newArmes = {...oldState.armes}
            const newPersonnage = {...oldState.personnage}
            newPersonnage.arme = newArmes[key]
            return {personnage : newPersonnage}
        })
    }

    handleReinitialiser =()=>{
        this.setState({
            personnage : {
                image : 1,
                force : 0,
                agilite : 0,
                intelligence : 0,
                arme : null
            },
            nbPointsDisponibles : 7,
            nom : "",
        })
    }

    handleValidation = ()=>{
        this.setState({loading:true})
        const player = {
            perso : {...this.state.personnage},
            nom : this.state.nom
        }
        axios.post("https://creaperso-24789-default-rtdb.europe-west1.firebasedatabase.app/persos.json", player)
            .then(reponse=>{
                this.setState({loading:false})
                this.handleReinitialiser()
            })
            .catch(error=>{
                console.log(error)
                this.setState({loading:false})
                this.handleReinitialiser()
            })
    }

    
    render(){
        return (
            <div className='container'>
                <TitreH1>Créateur de personnage</TitreH1>
                {this.state.loading && <div>Chargement...</div>}
                <div className="form-group">
                    <label htmlFor="inputName">Nom : </label>
                    <input type="text" className="form-control" id="inputName" value={this.state.nom} onChange={event => this.setState({nom : event.target.value
                    })} />
                </div>
                <Personnage 
                    {...this.state.personnage}
                    nextImageChange = {this.handleNextImage}
                    prevImageChange = {this.handlePrevImage}
                    nbPointsDisponibles = {this.state.nbPointsDisponibles}
                    addPoints={this.handleAddPoints}
                    deletePoints = {this.handleDeletePoints}
                />
                {
                    this.state.armes && 
                    <Armes 
                        listeArmes = {this.state.armes} 
                        choixArme = {this.handleSelectArme}
                        currentArme = {this.state.personnage.arme}
                    />
                }
                <Bouton btnColor='bg-accent' clic={this.handleReinitialiser}>Réinitialiser</Bouton>
                <Bouton btnColor='bg-accent-success' clic={this.handleValidation}>Créer</Bouton>
            </div>
        )
    }
}

export default CreateurPersonnage