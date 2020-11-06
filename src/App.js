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
    }
  }
  
  updatePlayercount = (count) => {
    this.setState({playerCount: count})
  }

  componentDidMount = () => {
    getCharacter()
    .then(data => this.setState({allCharacters: data}))
  }

  render() {
    return (
      <section>
        <h1>Home</h1>
        <QuickStart /> 
        <PlayerAmount updatePlayercount={this.updatePlayercount}/>
        <Rules />
        <PickPlayer playerCount={this.state.playerCount} allCharacters={this.state.allCharacters}/>
      </section>
    )
  }
}

export default App

