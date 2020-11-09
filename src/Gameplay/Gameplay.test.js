import React from "react";
import { render, waitFor, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { MemoryRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import Gameplay from './Gameplay.js'
import PlayCards from '../Play_Cards/PlayCards.js'


describe('Gameplay', () => {
  let startButton, restartGame, nextButton;
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Gameplay 
          allPlayerStatCards={[
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
            ]}
        />

      </MemoryRouter>
    );
    startButton = screen.getByRole('button', { name: /click here to start/i })
    restartGame = screen.getByRole('button', { name: /restart game/i })
  })

  it('should should render game play to the screen', () => {
    expect(startButton).toBeInTheDocument()
    expect(restartGame).toBeInTheDocument()
    userEvent.click(startButton)
    let nextButton = screen.getByRole('button', { name: /next/i })
    expect(nextButton).toBeInTheDocument()
  })
  
  it('should render a question when startButton is clicked', () => {
    userEvent.click(startButton)
    let questionText = screen.getByTestId('questions')
    expect(questionText).toBeInTheDocument()
  })
  
  it('should render a question when startButton is clicked', () => {
    userEvent.click(startButton)
    let questionText = screen.getByTestId('questions')
    expect(questionText).toBeInTheDocument()
  })

  it('should render a question when next is clicked', () => {
    userEvent.click(startButton)
    let questionText = screen.getByTestId('questions')
    expect(questionText).toBeInTheDocument()
    let nextButton = screen.getByRole('button', { name: /next/i })
    userEvent.click(nextButton)
    expect(questionText).toBeInTheDocument()
  })
})
