import React, { Component } from 'react'
import QuickStart from './Quick_Start/Quick_Start.js'
import Player_Amount from './Player_Amount/Player_Amount.js'
import Rules from './Rules/Rules.js'

class App extends Component {
  constructor() {
    super()
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <section>
        <h1>Enter in the amount</h1>
        <QuickStart /> 
        <Player_Amount />
        <Rules />
      </section>
    )
  }
}

export default App

