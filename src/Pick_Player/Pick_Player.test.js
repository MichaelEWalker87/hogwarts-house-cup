import React from "react";
import { render, waitFor, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { MemoryRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import PickPlayer from "./Pick_Player.js"


describe('Pick Player', () => {
  let playerOneTile, playerTwoTile, playerOneDropDown, errorText; 
  let playerTwoDropDown, submitButton, mockFuntion, sectionDropDown;
  let playerCount, updateselectedPlayers, characterNames, getAllPlayerStatCards;
  beforeEach(() => {
    mockFuntion = jest.fn()
    render(
      <MemoryRouter>
        <PickPlayer 
          playerCount={2} 
          updateselectedPlayers={mockFuntion}
          characterNames={[
            <option value="Harry">Harry</option>,
            <option value="Ron">Ron</option>,
            <option value="Fred">Fred</option>
          ]} 
        />
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
  
  it('Submit should be disabled at page render', () => {
    expect(submitButton).toBeDisabled()
  })
  
  it('Submit allow the user to select an input', () => {
    userEvent.selectOptions(playerOneDropDown, "Harry")
    userEvent.selectOptions(playerTwoDropDown, "Ron")
    expect(playerOneDropDown).toHaveValue("Harry")
    expect(playerTwoDropDown).toHaveValue("Ron")
    expect(submitButton).toBeEnabled()
    userEvent.click(submitButton)
  })

  it('Submit button should prevent a user from selecting default', async () => {
    userEvent.selectOptions(playerOneDropDown, "Harry")
    userEvent.selectOptions(playerOneDropDown, "Pick A Character")
    userEvent.selectOptions(playerTwoDropDown, "Ron")
    expect(submitButton).toBeEnabled()
    userEvent.click(submitButton)
    errorText = await waitFor(() => screen.getByText(/all players must pick a vaild character name/i))
    expect(errorText).toBeInTheDocument()
  })
}) 
  