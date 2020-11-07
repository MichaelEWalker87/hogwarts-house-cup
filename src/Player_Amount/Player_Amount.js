import React, { Component } from 'react'

export class PlayerAmount extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       players:2,
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    return (
        <section>
        <label>Pick The Amount Of Players</label>
        <input
          type='number'
          name='players'
          min={2}
          max={8}
          value={this.state.players}
          onChange={this.handleChange}
        />
        <button
          role="button"
          type="button"
          disabled={this.state.players > 8 || this.state.players < 2}
          className="login-submit"
          onClick={() => this.props.updatePlayercount(this.state.players)}
        >
          Submit
        </button>
      </section>
    )
  }
}

export default PlayerAmount

