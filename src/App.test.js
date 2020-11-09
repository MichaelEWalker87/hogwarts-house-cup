import React from "react";
import { render, waitFor, screen, getAllByText} from "@testing-library/react"
import "@testing-library/jest-dom"
import { MemoryRouter, Route } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import App from './App';
import { act } from "react-dom/test-utils";
import { getCharacter } from './Api_calls/API.js'
import PlayCards from "./Play_Cards/PlayCards.js"
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
  
  it('should route the submit button from quickstart to rules', () => {
    userEvent.click(screen.getByText('Submit'))
    expect(testLocation.pathname).toBe("/select-character")
    
    playerOneDropDown = screen.getByRole('combobox', { name: /player 1 select your character/i })
    playerTwoDropDown = screen.getByRole('combobox', { name: /player 2 select your character/i })
    let button = screen.getByRole('button', { name: /submit/i })
    userEvent.selectOptions(playerOneDropDown, "Stanley Shunpike")
    userEvent.selectOptions(playerTwoDropDown, "Stanley Shunpike")
    userEvent.click(button)
    expect(testLocation.pathname).toBe("/quickstart")
    
    let rulebutton = screen.getByRole('button', { name: /rules/i })
    userEvent.click(rulebutton)
    expect(testLocation.pathname).toBe("/rules")
  }) 

  it('should route the submit button from quickstart to game play', () => {
    userEvent.click(screen.getByText('Submit'))
    expect(testLocation.pathname).toBe("/select-character")
    
    playerOneDropDown = screen.getByRole('combobox', { name: /player 1 select your character/i })
    playerTwoDropDown = screen.getByRole('combobox', { name: /player 2 select your character/i })    
    let button = screen.getByRole('button', { name: /submit/i })
    userEvent.selectOptions(playerOneDropDown, "Stanley Shunpike")
    userEvent.selectOptions(playerTwoDropDown, "Stanley Shunpike")
    userEvent.click(button)
    expect(testLocation.pathname).toBe("/quickstart")
    
    let quickstartButton = screen.getByRole('button', { name: /start/i })
    userEvent.click(quickstartButton)
    expect(testLocation.pathname).toBe("/gameplay")
  })  
  
  it('should route the submit button from rules to game play', () => {
    userEvent.click(screen.getByText('Submit'))
    expect(testLocation.pathname).toBe("/select-character")
    
    playerOneDropDown = screen.getByRole('combobox', { name: /player 1 select your character/i })
    playerTwoDropDown = screen.getByRole('combobox', { name: /player 2 select your character/i })
    let button = screen.getByRole('button', { name: /submit/i })
    userEvent.selectOptions(playerOneDropDown, "Stanley Shunpike")
    userEvent.selectOptions(playerTwoDropDown, "Stanley Shunpike")
    userEvent.click(button)
    expect(testLocation.pathname).toBe("/quickstart")
    
    let rulebutton = screen.getByRole('button', { name: /rules/i })
    userEvent.click(rulebutton)
    expect(testLocation.pathname).toBe("/rules")
    
    let startGameButton = screen.getByRole('button', { name: /start game/i })
    userEvent.click(startGameButton)
    expect(testLocation.pathname).toBe("/gameplay")
  }) 

  it('should route the submit button from game play to game start', () => {
    userEvent.click(screen.getByText('Submit'))
    expect(testLocation.pathname).toBe("/select-character")
    
    playerOneDropDown = screen.getByRole('combobox', { name: /player 1 select your character/i })
    playerTwoDropDown = screen.getByRole('combobox', { name: /player 2 select your character/i })    
    let button = screen.getByRole('button', { name: /submit/i })
    userEvent.selectOptions(playerOneDropDown, "Stanley Shunpike")
    userEvent.selectOptions(playerTwoDropDown, "Stanley Shunpike")
    userEvent.click(button)
    expect(testLocation.pathname).toBe("/quickstart")
    
    let quickstartButton = screen.getByRole('button', { name: /start/i })
    userEvent.click(quickstartButton)
    expect(testLocation.pathname).toBe("/gameplay")

    let restartGame = screen.getByRole('button', { name: /restart game/i })
    userEvent.click(restartGame)
    expect(testLocation.pathname).toBe("/")
  })  

  it('should Allow up to 8 player to ', async () => {
   render(
   <MemoryRouter>
    <PlayCards allPlayerStatCards={[
      {
        _id: "5a1230070f5ae10021650d90",
        name: "Stanley Shunpike",
        role: "Conductor of the Knight Bus",
        alias: "Stan ",
        __v: 0,
        ministryOfMagic: false,
        orderOfThePhoenix: false,
        dumbledoresArmy: false,
        deathEater: false,
        bloodStatus: "unknown",
        species: "human"
      },
      {
        _id: "5a1230070f5ae10021650d90",
        name: "Stanley Shunpike",
        role: "Conductor of the Knight Bus",
        alias: "Stan ",
        __v: 0,
        ministryOfMagic: false,
        orderOfThePhoenix: false,
        dumbledoresArmy: false,
        deathEater: false,
        bloodStatus: "unknown",
        species: "human"
      },
      {
        _id: "5a1230070f5ae10021650d90",
        name: "Stanley Shunpike",
        role: "Conductor of the Knight Bus",
        alias: "Stan ",
        __v: 0,
        ministryOfMagic: false,
        orderOfThePhoenix: false,
        dumbledoresArmy: false,
        deathEater: false,
        bloodStatus: "unknown",
        species: "human"
      },
      {
        _id: "5a1230070f5ae10021650d90",
        name: "Stanley Shunpike",
        role: "Conductor of the Knight Bus",
        alias: "Stan ",
        __v: 0,
        ministryOfMagic: false,
        orderOfThePhoenix: false,
        dumbledoresArmy: false,
        deathEater: false,
        bloodStatus: "unknown",
        species: "human"
      },
      {
        _id: "5a1230070f5ae10021650d90",
        name: "Stanley Shunpike",
        role: "Conductor of the Knight Bus",
        alias: "Stan ",
        __v: 0,
        ministryOfMagic: false,
        orderOfThePhoenix: false,
        dumbledoresArmy: false,
        deathEater: false,
        bloodStatus: "unknown",
        species: "human"
      },
      {
        _id: "5a1230070f5ae10021650d90",
        name: "Stanley Shunpike",
        role: "Conductor of the Knight Bus",
        alias: "Stan ",
        __v: 0,
        ministryOfMagic: false,
        orderOfThePhoenix: false,
        dumbledoresArmy: false,
        deathEater: false,
        bloodStatus: "unknown",
        species: "human"
      },
      {
        _id: "5a1230070f5ae10021650d90",
        name: "Stanley Shunpike",
        role: "Conductor of the Knight Bus",
        alias: "Stan ",
        __v: 0,
        ministryOfMagic: false,
        orderOfThePhoenix: false,
        dumbledoresArmy: false,
        deathEater: false,
        bloodStatus: "unknown",
        species: "human"
      },
            {
        _id: "5a1230070f5ae10021650d90",
        name: "Stanley Shunpike",
        role: "Conductor of the Knight Bus",
        alias: "Stan ",
        __v: 0,
        ministryOfMagic: false,
        orderOfThePhoenix: false,
        dumbledoresArmy: false,
        deathEater: false,
        bloodStatus: "unknown",
        species: "human"
      },
    ]}/>
  </MemoryRouter>
   ) 
    let countInput = screen.getByRole('spinbutton')
    userEvent.clear(countInput)
    userEvent.type(countInput, "8") 
    userEvent.click(screen.getByText('Submit'))
    expect(testLocation.pathname).toBe("/select-character")
    
    playerOneDropDown = await waitFor (() => screen.getByRole('combobox', { name: /player 1 select your character/i }))
    playerTwoDropDown = await waitFor (() => screen.getByRole('combobox', { name: /player 2 select your character/i }))  
    let playerThreeDropDown = await waitFor (() => screen.getByRole('combobox', { name: /player 3 select your character/i }))
    let playerFourDropDown = await waitFor (() => screen.getByRole('combobox', { name: /player 4 select your character/i }))
    let playerFiveDropDown = await waitFor (() => screen.getByRole('combobox', { name: /player 5 select your character/i }))
    let playerSixDropDown = await waitFor (() => screen.getByRole('combobox', { name: /player 6 select your character/i }))
    let playerSevenDropDown = await waitFor (() => screen.getByRole('combobox', { name: /player 7 select your character/i }))
    let playerEightDropDown = await waitFor (() => screen.getByRole('combobox', { name: /player 8 select your character/i }))
    expect(playerEightDropDown).toBeInTheDocument()

    let button = screen.getByRole('button', { name: /submit/i })
    userEvent.selectOptions(playerOneDropDown, "Stanley Shunpike")
    userEvent.selectOptions(playerTwoDropDown, "Stanley Shunpike")
    userEvent.selectOptions(playerThreeDropDown, "Stanley Shunpike")
    userEvent.selectOptions(playerFourDropDown, "Stanley Shunpike")
    userEvent.selectOptions(playerFiveDropDown, "Stanley Shunpike")
    userEvent.selectOptions(playerSixDropDown, "Stanley Shunpike")
    userEvent.selectOptions(playerSevenDropDown, "Stanley Shunpike")
    userEvent.selectOptions(playerEightDropDown, "Stanley Shunpike")
    expect(button).toBeInTheDocument()
    userEvent.click(button) 
    expect(testLocation.pathname).toBe("/quickstart")
    
    let quickstartButton = screen.getByRole('button', { name: /Start/i })
    expect(quickstartButton).toBeInTheDocument()
    userEvent.click(quickstartButton) 
    expect(testLocation.pathname).toBe("/gameplay")
    
    let playerOneName = await waitFor (() => screen.getByText(/player 1/i)) 
    let playerTwoName = screen.getByRole('heading', { name: /player 2/i })
    let playerThreeName = screen.getByRole('heading', { name: /player 3/i })
    let playerFourName = screen.getByRole('heading', { name: /player 4/i })
    let playerFiveName = screen.getByRole('heading', { name: /player 5/i })
    let playerSixName = screen.getByRole('heading', { name: /player 6/i })
    let playerSevenName = screen.getByRole('heading', { name: /player 7/i })
    let playerEightName = screen.getByRole('heading', { name: /player 8/i })
    
    expect(playerOneName).toBeInTheDocument()
    expect(playerTwoName).toBeInTheDocument()
    expect(playerThreeName).toBeInTheDocument()
    expect(playerFourName).toBeInTheDocument()
    expect(playerFiveName).toBeInTheDocument()
    expect(playerSixName).toBeInTheDocument()
    expect(playerSevenName).toBeInTheDocument()
    expect(playerEightName).toBeInTheDocument()
  }) 
})

