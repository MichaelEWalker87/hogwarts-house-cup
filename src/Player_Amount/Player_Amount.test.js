import React from "react";
import { render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { MemoryRouter } from "react-router-dom"
import { userEvent } from "@testing-library/user-event"
import PlayerAmount from './Player_Amount.js'

describe('Amount', () => {
  let playerTile, countInput, submit, mockFuntion;
  beforeEach(() => {
    mockFuntion = jest.fn()
    render(
      <MemoryRouter>
        <PlayerAmount mockFuntion={mockFuntion}/>
      </MemoryRouter>
    );
    playerTile = screen.getByText(/pick the amount of players/i)
    countInput = screen.getByRole('spinbutton')
    submit = screen.getByRole('button', { name: /submit/i })
  })
  it('should render the player amount page', () => {
    expect(playerTile).toBeInTheDocument();
    expect(countInput).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  })
  
})
