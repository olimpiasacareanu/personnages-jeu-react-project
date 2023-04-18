import React from 'react';
import CreateurPersonnage from './containers/CreateurPersonnage/CreateurPersonnage';
import ListePersonnages from './components/ListePersonnages/ListePersonnages';
import './App.css'

function App() {
  return (
   <>
      <CreateurPersonnage />
      <ListePersonnages />
   </>
  );
}

export default App;
