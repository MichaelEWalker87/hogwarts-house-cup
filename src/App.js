import React, { Component } from 'react'
import QuickStart from './Quick_Start/Quick_Start.js'
import PlayerAmount from './Player_Amount/Player_Amount.js'
import Rules from './Rules/Rules.js'
import PickPlayer from './Pick_Player/Pick_Player.js'
import { getCharacter } from './Api_calls/API.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allCharacters: [],
      playerCount: 2,
      selectedPlayers: [],
      characterNames: [],
      allPlayerStatCards: [],
    }
  }
  
  updatePlayercount = (count) => {
    this.setState({playerCount: count})
  }

  updateselectedPlayers = async (pickedCharacters) => {
    await this.setState({selectedPlayers: pickedCharacters})
    this.getAllPlayerStatCards()
  }

  getAllPlayerStatCards = () => {
    if(this.state.selectedPlayers.length <= 2){
      let characterStats = this.state.selectedPlayers.map((selectedPlayer) => {
        return this.state.allCharacters.find((character) => {
          return character.name === selectedPlayer
        })
      })
      this.setState({allPlayerStatCards: characterStats})
    } 
  }

  componentDidMount = () => {
    getCharacter()
    .then(data => {
      let characterNames = this.populateDropDownCharacters(data)
      this.setState({allCharacters: data, characterNames})
    })
  }

  populateDropDownCharacters = (characterData) => {
   return characterData.map((character, index) => {
       return(<option key={index} value={character.name}>{character.name}</option>)
    })
  } 

  render() {
    return (
      <section>
        <h1>Home</h1>
        <QuickStart /> 
        <PlayerAmount updatePlayercount={this.updatePlayercount}/>
        <Rules />
        <PickPlayer 
          playerCount={this.state.playerCount} 
          updateselectedPlayers={this.updateselectedPlayers}
          characterNames={this.state.characterNames}
          getAllPlayerStatCards={this.getAllPlayerStatCards}
        />
      </section>
    )
  }
}

export default App

