import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Rules extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      ruleInput:''
    }
  }
  
  updateForm = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <section>
        <h3>Enter in the rule you would like to see added to the game</h3> 
        <input
          type='text'
          name='ruleInput'
          value={this.state.ruleInput}
          onChange={this.updateForm}
        />
        <button
          type="button"
          name="Submit"
          disabled={this.state.ruleInput === ''}
        >
          Submit Rule
        </button> 
        <Link
          to="/gameplay"
          label="gameplay"
        >
          <button>Start Game</button>
        </Link>
      </section>
    )
  }
}

export default Rules
