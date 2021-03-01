import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import './Player_Amount.css'

export class PlayerAmount extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       players: 2,
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    return (
        <section className="amount-section">
        <label className="pick-amount-lable">Pick The Amount Of Players</label>
        <span>C</span><span>S</span><span>S</span><span>&nbsp;</span><span>S</span><span>m</span><span>o</span><span>k</span><span>y</span><span>&nbsp;</span><span>T</span><span>e</span><span>x</span><span>t</span><span>&nbsp;</span><span>E</span><span>f</span><span>f</span><span>e</span><span>c</span><span>t</span>
        <input
          type='number'
          name='players'
          min={2}
          max={8}
          value={this.state.players}
          onChange={this.handleChange}
          className="amount-picker"
        />
        <Link 
          to="/select-character"
          label="select-character"
        >
          <button
            role="button"
            disabled={this.state.players > 8 || this.state.players < 2}
            className="login-submit"
            onClick={() => this.props.updatePlayercount(this.state.players)}
          >
            Submit
          </button>
        </Link>
      </section>
    )
  }
}

export default PlayerAmount

PlayerAmount.propTypes = {
  updatePlayercount: PropTypes.func
}
