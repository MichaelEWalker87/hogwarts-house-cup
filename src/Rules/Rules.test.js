import React from "react";
import { render, waitFor, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { MemoryRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import Rules from "./Rules.js"

describe('Rules', () => {
  let header, input, ruleSubmitText;
  let startGameButton, submitRuleButton;
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Rules/>
      </MemoryRouter>
    )
   header = screen.getByRole('heading', { name: /enter in the rule you would like to see added to the game/i })
   input = screen.getByPlaceholderText(/enter new rule here/i)
   ruleSubmitText = screen.getByText(/you have not added any rules at this time/i)
   startGameButton = screen.getByRole('button', { name: /start game/i })
   submitRuleButton = screen.getByRole('button', { name: /submit rule/i })
  })

  it('should render the Rules to the page', () => {
    expect(header).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(ruleSubmitText).toBeInTheDocument()
    expect(startGameButton).toBeInTheDocument()
    expect(submitRuleButton).toBeInTheDocument()
  })
  
  it('Submit rule button should be disabled when page renders', () => {
    expect(submitRuleButton).toBeDisabled()
  })
  
  it('should produce a success message upon submitting a new rule', () => {
    userEvent.type(input, "This is a new idea")
    userEvent.click(submitRuleButton)
    let successMessage = screen.getByText(/you successfully entered 1 new rules/i)
    expect(successMessage).toBeInTheDocument()
  })
  
})
