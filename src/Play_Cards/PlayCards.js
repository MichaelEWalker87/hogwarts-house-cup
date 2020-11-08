import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { SingleCard } from "../SingleCard/SingleCard.js"

export class PlayCards extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      cleanPlayerCards: []
    }
  }
  
  componentDidMount = () => {
    let cleanCards = this.props.allPlayerStatCards.map((card, index) => {
      let playerCard = {
        player: (index + 1),
        name: card.name || "Unknown",
        school: card.school || "Unknown",
        role: card.role || "Unknown",
        house: card.house || "Unknown",
        ministryOfMagic: card.ministryOfMagic || "Unknown",
        orderOfThePhoenix: card.orderOfThePhoenix || "Unknown",
        dumbledoresArmy: card.dumbledoresArmy || "Unknown",
        deathEater: card.deathEater || "Unknown",
        bloodStatus: card.bloodStatus || "Unknown",
        species: card.species || "Unknown",
        patronus: card.patronus || "Unknown",
        boggart: card.boggart || "Unknown",
        animagus: card.animagus || "Unknown",
        wand: card.wand || "Unknown",
        alias: card.alias || "Unknown",
      }
      return playerCard
    })
    this.setState({cleanPlayerCards: cleanCards})
  }

  renderCards = () => {
    let fuck= this.state.cleanPlayerCards.map((card) => {
      return(<SingleCard card={card}/>)
    })
    return fuck
  }

  render() {
    if(this.state.cleanPlayerCards.length === 0){
      return <h3>An Error has occurred please restart the game and try again</h3>
    } 
    return (
      <section>
        {this.renderCards()}
      </section>
    )
  }
}

export default PlayCards


