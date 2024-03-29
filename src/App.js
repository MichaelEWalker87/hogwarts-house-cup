import React, { Component } from 'react'
import QuickStart from './Quick_Start/QuickStart.js'
import PlayerAmount from './Player_Amount/Player_Amount.js'
import Rules from './Rules/Rules.js'
import PickPlayer from './Pick_Player/Pick_Player.js'
import Gameplay from './Gameplay/Gameplay.js'
import { getCharacter } from './Api_calls/API.js'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './SCSS/Base.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allCharacters: [],
      playerCount:this.playerCount || 0,
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
    if(this.state.selectedPlayers.length <= 8){
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
      <section className="all-files">
        <Route exact path='/' render={ () => 
          <PlayerAmount updatePlayercount={this.updatePlayercount}/>} 
        />
        <Route exact path='/select-character' render={ () => 
          <PickPlayer 
            className="pick-player-app"
            playerCount={+this.state.playerCount} 
            updateselectedPlayers={this.updateselectedPlayers}
            characterNames={this.state.characterNames}
          />} 
        />
        <Route exact path='/quickstart' render={ () => <QuickStart /> } />
        <Route exact path='/rules' render={ () => <Rules />} />
        <Route exact path='/gameplay' render={ () => 
          <Gameplay allPlayerStatCards={this.state.allPlayerStatCards}/> } 
        />
      </section>
    )
  }
}

export default App

