import React from 'react';
import './App.css';
import characters from './api';
import CharContainer from './Containers/CharContainer'

class App extends React.Component {

  state = { characters }

  render() {
    console.log(characters.map(charObj => < characters name={charObj.name} />))

    return (
      <>
        <CharContainer imageArr={this.state.characters} />
      </>
    );
  }

}

export default App;
