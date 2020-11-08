import React from 'react'

export const SingleCard = (props) => {
  return (
    <section className={props.player}>
      <h5>Player {props.player}</h5>
      <h6>name: {props.name}</h6>
      <p>alias: {props.alias}</p>
      <p>school: {props.school}</p>
      <p>role: {props.role}</p>
      <p>house: {props.house}</p>
      <p>Dumbledores Army: {props.dumbledoresArmy}</p>
      <p>Order Of The Phoenix: {props.orderOfThePhoenix}</p>
      <p>Ministry Of Magic: {props.ministryOfMagic}</p>
      <p>Death Eater: {props.deathEater}</p>
      <p>Animagus: {props.animagus}</p>
      <p>Boggart: {props.boggart}</p>
      <p>Patronus: {props.Patronus}</p>
      <p>Species: {props.species}</p>
      <p>Wand: {props.wand}</p>
      <p>Blood Status: {props.bloodStatus}</p>
    </section>
  )
}
