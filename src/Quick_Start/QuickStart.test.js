import React from "react";
import { render, waitFor, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { MemoryRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import QuickStart from "./QuickStart.js"

describe('Quickstart', () => {
  let headerText, quickStartText, ruleText;
  let Rulebutton, quickstartButton; 
  beforeEach(() => {
    render(
      <MemoryRouter>
        <QuickStart/>
      </MemoryRouter>
    )
   headerText = screen.getByText(/choose 'start' and be taken directly to gameplay, or select 'rule' to customize the gameplay experience./i)
   quickStartText = screen.getByText(/quickstart/i)
   ruleText = screen.getByText(/add a game rule/i)
   Rulebutton = screen.getByRole('button', { name: /rules/i })
   quickstartButton = screen.getByRole('button', { name: /start/i })
  })

  it('should render Quickstart to the page', () => {
    expect(headerText).toBeInTheDocument()
    expect(quickStartText).toBeInTheDocument()
    expect(ruleText).toBeInTheDocument()
    expect(Rulebutton).toBeInTheDocument()
    expect(quickstartButton).toBeInTheDocument()
  })
  
})
