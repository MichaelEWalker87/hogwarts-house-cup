import React, { Component } from 'react'

export class Player_Amount extends Component {
  constructor() {
    super()
  
    this.state = {
       
    }
  }
  
  render() {
    return (
        <section>
        <label>Pick The Amount Of Players</label>
        <input
          type='number'
          name='Amount of Players Input'
          min={2}
          max={8}
          value=''
          onChange=''
        />
        <button
          role="button"
          type="button"
          className="login-submit"
          onClick=''
        >
          Submit
        </button>
      </section>
    )
  }
}

export default Player_Amount

