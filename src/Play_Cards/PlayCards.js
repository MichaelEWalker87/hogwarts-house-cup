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
        name: card.name || "unknown",
        school: card.school || "unknown",
        role: card.role || "unknown",
        house: card.house || "unknown",
        ministryOfMagic: `${card.ministryOfMagic}`,
        orderOfThePhoenix: `${card.orderOfThePhoenix}`,
        dumbledoresArmy: `${card.dumbledoresArmy}`,
        deathEater: `${card.deathEater}`,
        bloodStatus: card.bloodStatus || "unknown",
        species: card.species || "unknown",
        patronus: card.patronus || "unknown",
        boggart: card.boggart || "unknown",
        animagus: card.animagus || "unknown",
        wand: card.wand || "unknown",
        alias: card.alias || "unknown",
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


