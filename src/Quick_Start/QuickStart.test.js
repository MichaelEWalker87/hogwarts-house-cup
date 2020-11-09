import React from "react";
import { render, waitFor, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { MemoryRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import QuickStart from "./QuickStart.js"

describe('Quickstart', () => {
  beforeEach(() => {
    mockFuntion = jest.fn()
    render(
      <MemoryRouter>
        <QuickStart/>
      </MemoryRouter>
    )
  })
  it('should render Quickstart to the page', () => {
    userEvent.selectOptions()
  })
  
})
