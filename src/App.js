import React, { Component } from 'react'
import QuickStart from './Quick_Start/Quick_Start.js'
import PlayerAmount from './Player_Amount/Player_Amount.js'
import Rules from './Rules/Rules.js'
import PickPlayer from './Pick_Player/Pick_Player.js'

class App extends Component {
  constructor() {
    super()
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <section>
        <h1>Home</h1>
        <QuickStart /> 
        <PlayerAmount />
        <Rules />
        <PickPlayer />
      </section>
    )
  }
}

export default App

