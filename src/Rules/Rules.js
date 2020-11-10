import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { questions } from '../Mock_Data/Mock_Data.js'
import './Rules.css'

class Rules extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      ruleInput:'',
      addRuleCount: this.addRuleCount || 0, 
    }
  }
  
  updateForm = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  updateMockData = async () => {
    questions.push(this.state.ruleInput)
    await this.setState({addRuleCount: (this.state.addRuleCount +1)})
    this.setState({ruleInput:''})
  }

  render() {
    let displayRule;
    if(this.state.addRuleCount === 0) {
      displayRule = 
        <p>
          You have not added any rules at this time
        </p>
    } else {
      displayRule = 
        <p>
          You successfully entered {this.state.addRuleCount} new rules
        </p>
    }
    return (
      <section>
        <h3>Enter in the rule you would like to see added to the game</h3> 
        <input
          type='text'
          name='ruleInput'
          value={this.state.ruleInput}
          onChange={this.updateForm}
          placeholder="Enter New Rule Here"
        />
        {displayRule}
        <button
          type="button"
          name="Submit"
          disabled={this.state.ruleInput === ''}
          onClick={this.updateMockData}
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
