import React from 'react'
import "./SingleCard.css"

export const SingleCard = (props) => {
  return (
    <section key={props.card.player} className={props.card.player} className="single-card">
      <h4>Player {props.card.player}</h4>
      <p>Name: {props.card.name}</p>
      <p>Alias: {props.card.alias}</p>
      <p>School: {props.card.school}</p>
      <p>Role: {props.card.role}</p>
      <p>House: {props.card.house}</p>
      <p>Dumbledores Army: {props.card.dumbledoresArmy}</p>
      <p>Order Of The Phoenix: {props.card.orderOfThePhoenix}</p>
      <p>Ministry Of Magic: {props.card.ministryOfMagic}</p>
      <p>Death Eater: {props.card.deathEater}</p>
      <p>Animagus: {props.card.animagus}</p>
      <p>Boggart: {props.card.boggart}</p>
      <p>Patronus: {props.card.patronus}</p>
      <p>Species: {props.card.species}</p>
      <p>Wand: {props.card.wand}</p>
      <p>Blood Status: {props.card.bloodStatus}</p>
    </section>
  )
}
