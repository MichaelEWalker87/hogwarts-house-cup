import React, { Component } from 'react'

class Rules extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
             
    }
  }
    
  render() {
    return (
      <section>
        <h3>Enter in teh rule you would like to see added to the game</h3> 
        <input
          type='text'
          name='ruleInput'
          // value=''
          // onChange=''
        />
        <button>Submit Rule</button> 
        <button>Start Game</button>
      </section>
    )
  }
}

export default Rules
