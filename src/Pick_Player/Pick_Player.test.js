import React from "react";
import { render, waitFor, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { MemoryRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import PickPlayer from './Pick_Player.test.js'

describe('Pick Player', () => {
  let playerOneTile, playerTwoTile, playerOneDropDown; 
  let playerTwoDropDown, submitButton, mockFuntion;
  beforeEach(() => {
    mockFuntion = jest.fn()
    render(
      <MemoryRouter>
        <PickPlayer />
      </MemoryRouter>
    );
    playerOneTile = screen.getByText(/player 1 select your character/i)
    playerTwoTile = screen.getByText(/player 2 select your character/i)
    playerOneDropDown = screen.getByRole('combobox', { name: /player 1 select your character/i })
    playerTwoDropDown = screen.getByRole('combobox', { name: /player 2 select your character/i })
    submitButton = screen.getByRole('button', { name: /submit/i })
  })
  it('should render Pick Player to the page', () => {
    expect(playerOneTile).toBeInTheDocument();
    expect(playerTwoTile).toBeInTheDocument();
    expect(playerOneDropDown).toBeInTheDocument();
    expect(playerTwoDropDown).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  }) 
  
})
