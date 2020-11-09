import React from "react";
import { render, waitFor, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { MemoryRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import PlayerAmount from './Player_Amount.js'

describe('Amount', () => {
  let playerTile, countInput, submit, mockFuntion;
  beforeEach(() => {
    mockFuntion = jest.fn()
    render(
      <MemoryRouter>
        <PlayerAmount updatePlayercount={mockFuntion}/>
      </MemoryRouter>
    );
    playerTile = screen.getByText(/pick the amount of players/i)
    countInput = screen.getByRole('spinbutton')
    submit = screen.getByText('Submit')
  })

  it('should render the player amount page', () => {
    expect(playerTile).toBeInTheDocument();
    expect(countInput).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  it('should disable the submit if input is invalid', () => {
    userEvent.click(countInput)
    userEvent.clear(countInput)
    userEvent.type(countInput, '2')
    expect(countInput.value).toBe('2')
    expect(submit).toBeEnabled() 

    userEvent.clear(countInput)
    userEvent.type(countInput, '1')
    expect(countInput.value).toBe('1')
    expect(submit).toBeDisabled()
  });

})
