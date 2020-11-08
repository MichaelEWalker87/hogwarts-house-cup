import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { questions } from '../Mock_Data/Mock_Data.js'

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

  // makePlayerCards = (props) => {
  //   this.props.allPlayerStatCards.map((card) => {
  //    const playerCard = {
  //      bloodStatus: "unknown",
  //      boggart: "Lord Voldemort",
  //      deathEater: false,
  //      dumbledoresArmy: false,
  //      house: "Gryffindor",
  //      ministryOfMagic: false,
  //      name: "Katie Bell",
  //      orderOfThePhoenix: false,
  //      role: card.role || "unknown",
  //      school: "Hogwarts School of Witchcraft and Wizardry",
  //      species: "human",
  //     }
  //   })
  // }

  render(){
    return (
      <section>
        <section>
          <p>
            {this.state.question}
          </p>
          <button
            onClick={this.getRandomIndex}
          >
            Next 
          </button>
        </section>
        <Link 
          to="/" 
          label="Home"
        >
          <button>
            Go To Start
          </button>
        </Link>
      </section>
    )
  }
}

export default Gameplay
