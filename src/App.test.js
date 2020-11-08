import React from "react";
import { render, waitFor, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { MemoryRouter, Route } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import App from './App';
import { act } from "react-dom/test-utils";


describe('App', () => {
  let testHistory, testLocation;
  beforeEach(() => {
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
  it('should route the sumit button from player amount to select-character', () => {
    userEvent.click(screen.getByText('Submit'))
    screen.debug()
    expect(testLocation.pathname).toBe("/select-character")
  })  
})

