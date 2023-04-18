import React, {Component} from 'react'
import axios from 'axios'

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
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-l-6">
                                {!this.state.loading && this.state.persosArray &&
                                    <h2>{console.log(this.state.persosArray[0].nom)}</h2>
                                }
                                    <img src="" alt="" />
                                </div>
                                <div className="col-l-6">
                                    <h6>force : 3</h6>
                                    <h6>agilite : 2</h6>
                                    <h6>intelligence : 2</h6>
                                    <div className="arme">
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-l-6">
                                    <h2>Mya</h2>
                                    <img src="" alt="" />
                                </div>
                                <div className="col-l-6">
                                    <h6>force : 1</h6>
                                    <h6>agilite : 3</h6>
                                    <h6>intelligence : 2</h6>
                                    <div className="arme">
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ListePersonnages