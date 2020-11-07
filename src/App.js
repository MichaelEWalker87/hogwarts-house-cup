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

    }
  }
  
  updatePlayercount = (count) => {
    this.setState({playerCount: count})
  }

  updateselectedPlayers = (pickedCharacters) => {
    this.setState({selectedPlayers: pickedCharacters})
  }

  // player: 1
  // bloodStatus: "none"
  // deathEater: false
  // dumbledoresArmy: false
  // house: "none"
  // ministryOfMagic: false
  // name: "none"
  // orderOfThePhoenix: false
  // role: "none"
  // school: "none"
  // species: "none"

  GetAllPlayerStatCards = () => {
    if(this.state.selectedPlayers.length <= 2){
      let characterStats = this.state.selectedPlayers.map((selectedPlayer) => {
        return this.state.allCharacters.find((character) => {
          return character.name === selectedPlayer
        })
      })
      console.log(characterStats)
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
    this.GetAllPlayerStatCards()
    return (
      <section>
        <h1>Home</h1>
        <QuickStart /> 
        <PlayerAmount updatePlayercount={this.updatePlayercount}/>
        <Rules />
        <PickPlayer 
          playerCount={this.state.playerCount} 
          updateselectedPlayers={this.updateselectedPlayers}
          allCharacters={this.state.allCharacters}
          characterNames={this.state.characterNames}
        />
      </section>
    )
  }
}

export default App

