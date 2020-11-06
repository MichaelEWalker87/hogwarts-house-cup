import React, { Component } from 'react'
import QuickStart from './Quick_Start/Quick_Start.js'

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
      </section>
    )
  }
}

export default App

