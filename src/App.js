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
      selectedPlayers: ['Hannah Abbot'],
      characterNames: [],
    }
  }
  
  updatePlayercount = (count) => {
    this.setState({playerCount: count})
  }

  updateselectedPlayers = (pickedCharacters) => {
    this.setState({selectedPlayers: pickedCharacters})
  }

  getAllCharacterStats = () => {
    if(this.state.selectedPlayers !== []){
      this.state.selectedPlayers.reduce((acc, selectedPlayer, index) => {
        let name = [Object.values(selectedPlayer)]
        this.state.allCharacters.find((character) =>{
          return character.name === "name"
        })
        return acc 
      }, []); 
    }
  }
  // updateselectedPlayers = (pickedCharacters) => {
  //   pickedCharacters.forEach(pickedCharacter => {  
  //     console.log(pickedCharacter) 
  //     const characters = this.state.allCharacters.find((character, index) => { 
  //       let counter = index + 1 
  //       console.log(character)
  //       return character.name === pickedCharacter[counter]
  //     })
  //     this.setState({ selectedPlayers: [...this.state.selectedPlayers, characters] })
  //   });
  // }
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

  componentDidMount = () => {
    getCharacter()
    .then(data => {
      console.log("data", data) 
      let characterNames = this.populateCharacters(data)
      this.setState({allCharacters: data, characterNames})
    })
  }

  populateCharacters = (characterData) => {
   return characterData.map((character) => {
       return(<option value={character.name}>{character.name}</option>)
    })
  } 

  render() {
    // this.getAllCharacterStats() 
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

