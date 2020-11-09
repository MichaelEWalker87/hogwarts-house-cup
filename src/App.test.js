import React from "react";
import { render, waitFor, screen, getAllByText} from "@testing-library/react"
import "@testing-library/jest-dom"
import { MemoryRouter, Route } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import App from './App';
import { act } from "react-dom/test-utils";
import { getCharacter } from './Api_calls/API.js'
jest.mock('./Api_calls/API.js')


describe('App', () => {
  let testHistory, testLocation, playerOneDropDown; 
  let playerTwoDropDown;
  beforeEach(() => {
    getCharacter.mockResolvedValue([
      {
        "_id": "5a1230070f5ae10021650d90",
        "name": "Stanley Shunpike",
        "role": "Conductor of the Knight Bus",
        "alias": "Stan ",
        "__v": 0,
        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
      },
      {
          "_id": "5a1230e90f5ae10021650d91",
          "name": "Aurora Sinistra",
          "role": "Professor, Astronomy",
          "school": "Hogwarts School of Witchcraft and Wizardry",
          "__v": 0,
          "ministryOfMagic": false,
          "orderOfThePhoenix": false,
          "dumbledoresArmy": false,
          "deathEater": false,
          "bloodStatus": "unknown",
          "species": "human"
      },
    ])
    render(
      <MemoryRouter>
        <App />
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );
    
  })
  it('should route the submit button from player amount to select-character', () => {
    userEvent.click(screen.getByText('Submit'))
    expect(testLocation.pathname).toBe("/select-character")
  })  

  it('should make a fetch call on render', () => {
    expect(getCharacter).toHaveBeenCalled()
  })

  it('After a user selects a number of players they should see character options', () => {
    userEvent.click(screen.getByText('Submit'))
    let inputOne = screen.getByRole('combobox', { name: /player 1 select your character/i })
    let stan = screen.getAllByText("Stanley Shunpike") 
    expect(stan.length).toBe(2)
  }) 
  
  it('should route the submit button from select-character to quickstart', () => {
    userEvent.click(screen.getByText('Submit'))
    expect(testLocation.pathname).toBe("/select-character")
    playerOneDropDown = screen.getByRole('combobox', { name: /player 1 select your character/i })
    playerTwoDropDown = screen.getByRole('combobox', { name: /player 2 select your character/i })
    let button = screen.getByRole('button', { name: /submit/i })
    userEvent.selectOptions(playerOneDropDown, "Stanley Shunpike")
    userEvent.selectOptions(playerTwoDropDown, "Stanley Shunpike")
    userEvent.click(button)
    expect(testLocation.pathname).toBe("/quickstart")
  }) 
  
})

