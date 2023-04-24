import React, { Component } from 'react';
import CreateurPersonnage from './containers/CreateurPersonnage/CreateurPersonnage';
import ListePersonnages from './components/ListePersonnages/ListePersonnages';
import './App.css'

class App extends Component{
  state = {
    refresh : false
  }

  handleRefresh = ()=>{
    this.setState((oldState)=>{
      return{
        refresh : !oldState.refresh
      }
    })
  }

  render(){
    return (
      <>
         <CreateurPersonnage  refresh={this.handleRefresh} />
         <ListePersonnages refresh={this.state.refresh} />
      </>
     );
  }
}
export default App;
