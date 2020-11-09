import React from "react";
import { render, waitFor, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { MemoryRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import PlayCards from './PlayCards.js'

describe('PlayCards', () => {
  
  it('should be able to make cards', () => {
      render(
        <MemoryRouter>
          <PlayCards allPlayerStatCards={[
            {
            alias: "Padfoot",
            animagus: "black dog",
            bloodStatus: "pure-blood",
            deathEater: false,
            dumbledoresArmy: false,
            house: "Gryffindor",
            ministryOfMagic: false,
            name: "Sirius Black",
            orderOfThePhoenix: true,
            school: "Hogwarts School of Witchcraft and Wizardry",
            species: "human",
            __v: 0,
            _id: "5a0fa7dcae5bc100213c2338",
          }
          ]}/>
        </MemoryRouter>
      );
      let playerNumber = screen.getByText("Player 1")
      let playerName = screen.getByText("Name: Sirius Black")
      let playerAlias = screen.getByText("Alias: Padfoot")
      let playerSchool = screen.getByText("School: Hogwarts School of Witchcraft and Wizardry")
      let playerRole = screen.getByText("Role: unknown")
      let playerHouse = screen.getByText("House: Gryffindor")
      let playerDA = screen.getByText("Dumbledores Army: false")
      let playerPhoenix = screen.getByText("Order Of The Phoenix: true")
      let playerMinistry = screen.getByText("Ministry Of Magic: false")
      let playerDeath = screen.getByText("Death Eater: false")
      let playerAnimagus = screen.getByText("Animagus: black dog")
      let playerBoggart = screen.getByText("Boggart: unknown")
      let playerPatronus = screen.getByText("Patronus: unknown")
      let playerSpecies = screen.getByText("Species: human")
      let playerWand = screen.getByText("Wand: unknown")
      let playerBlood = screen.getByText("Blood Status: pure-blood")
    expect(playerNumber).toBeInTheDocument()
    expect(playerName).toBeInTheDocument()
    expect(playerAlias).toBeInTheDocument()
    expect(playerSchool).toBeInTheDocument()
    expect(playerRole).toBeInTheDocument()
    expect(playerHouse).toBeInTheDocument()
    expect(playerDA).toBeInTheDocument()
    expect(playerPhoenix).toBeInTheDocument()
    expect(playerMinistry).toBeInTheDocument()
    expect(playerDeath).toBeInTheDocument()
    expect(playerAnimagus).toBeInTheDocument()
    expect(playerBoggart).toBeInTheDocument()
    expect(playerPatronus).toBeInTheDocument()
    expect(playerSpecies).toBeInTheDocument()
    expect(playerWand).toBeInTheDocument()
    expect(playerBlood).toBeInTheDocument()
  })
  
  it('should render an error if no data is passed to play cards', () => {
    render(
      <MemoryRouter>
        <PlayCards allPlayerStatCards={[]}/>
      </MemoryRouter>
    );
    let errorText = screen.getByText("An Error has occurred please restart the game and try again")
    expect(errorText).toBeInTheDocument()
  })
  
  it('should be able to render more than one card', () => {
    render(
      <MemoryRouter>
        <PlayCards allPlayerStatCards={[
          {
          alias: "Padfoot",
          animagus: "black dog",
          bloodStatus: "pure-blood",
          deathEater: false,
          dumbledoresArmy: false,
          house: "Gryffindor",
          ministryOfMagic: false,
          name: "Sirius Black",
          orderOfThePhoenix: true,
          school: "Hogwarts School of Witchcraft and Wizardry",
          species: "human",
          __v: 0,
          _id: "5a0fa7dcae5bc100213c2338",
        },
        {
          bloodStatus: "pure-blood",
          deathEater: true,
          dumbledoresArmy: false,
          house: "Slytherin",
          ministryOfMagic: false,
          name: "Crabbe",
          orderOfThePhoenix: false,
          school: "Hogwarts School of Witchcraft and Wizardry",
          species: "human",
          __v: 0,
          _id: "5a1093eb3dc2080021cd8753",
        }
        ]}/>
      </MemoryRouter>
    );
    let playerNameSirius = screen.getByText("Name: Sirius Black")
    let playerNameCrabbe = screen.getByText("Name: Crabbe")

    expect(playerNameSirius).toBeInTheDocument()
    expect(playerNameCrabbe).toBeInTheDocument()
  })
  
})
