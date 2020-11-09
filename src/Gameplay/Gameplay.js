import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { questions } from '../Mock_Data/Mock_Data.js'
import PlayCards from '../Play_Cards/PlayCards.js'

export class Gameplay extends Component {
  constructor(props) {
      super(props)

      this.state = {
          question: "",
          playerCards: []
      }
  }

  getRandomIndex = () => {
    let num = Math.floor(Math.random() * questions.length);
    this.setState({question: questions[num]})
  };

  render(){
    let button;
    if(this.state.question === '') {
      button = "Click Here To Start"
    } else {
      button = "Next"
    }
    return (
      <section>
        <PlayCards allPlayerStatCards={this.props.allPlayerStatCards}/>
        <section>
          <p
            data-testid="questions"
          >
            {this.state.question}
          </p>
          <button
            onClick={this.getRandomIndex}
          >
            {button} 
          </button>
        </section>
        <Link 
          to="/" 
          label="Home"
        >
          <button>
            Restart Game
          </button>
        </Link>
      </section>
    )
  }
}

export default Gameplay
