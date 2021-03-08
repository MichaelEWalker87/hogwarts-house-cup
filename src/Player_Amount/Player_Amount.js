import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Player_Amount.css';
import '../SCSS/Base.scss';
import audio from "../images/harry_potter_theme.mp3"; 


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
          <section className="ticket">
            <section className="pick-player-title pick-player-title-color">
              <span>P</span><span>i</span><span>c</span>
              <span>k</span><span>&nbsp;</span><span>T</span>
              <span>h</span><span>e</span><span>&nbsp;</span>
              <span>A</span><span>m</span><span>o</span>
              <span>u</span><span>n</span><span>t</span>
              <span>&nbsp;</span><span>O</span><span>f</span>
              <span>&nbsp;</span><span>P</span><span>l</span>
              <span>a</span><span>y</span><span>e</span>
              <span>r</span><span>s</span>
            </section>
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
              className="link-pick-amount"
            >
              <button
                role="button"
                href="/select-character"
                disabled={this.state.players > 8 || this.state.players < 2}
                className="login-submit"
                onClick={() => this.props.updatePlayercount(this.state.players)}
              >
                Submit
              </button>
            </Link>
        </section>
        <audio src={audio} id="myaudio" className="audio" controls type="audio/mpeg" autoPlay></audio>
        <script>
          var audio = document.getElementById("myaudio");
          audio.volume = 0.2;
        </script>
      </section>
    )
  }
}

export default PlayerAmount

PlayerAmount.propTypes = {
  updatePlayercount: PropTypes.func
}
