import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../SCSS/Base.scss'

class PickPlayer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentPlayers: this.lockPick(),
            error: '', 
            redirect: false,
        }
    }

    populatePlayers = () => {
        let allPlayers = []
         for (let i = 0; i < this.props.playerCount; i++) {
            let playerNumber = (i)
            allPlayers.push(
                <section 
                    key={(playerNumber + 1) } 
                    title="character-dropdown" 
                    className="character-dropdown"
                >
                    <label className="character-dropdown-lable">
                        Player {(playerNumber + 1)} select your character
                        <select 
                            className="character-dropdown-select"
                            name={(playerNumber)}
                            onChange={this.handleChange}
                        >
                            <option value={-1} className="character-dropdown-select-two">Pick A Character</option>
                            {this.props.characterNames}
                        </select>
                    </label>
                </section>
            )
         }
         return allPlayers
    }

    lockPick = (playerNum) => {
        let lockPlayers = []
        for (let i = 0; i < this.props.playerCount; i++) {
            lockPlayers.push("-1")
        }
        return lockPlayers
    }

    handleChange = (event) => {
        let copy = this.state.currentPlayers.concat()
        copy[+event.target.name] = event.target.value 
        this.setState({currentPlayers:copy});
    }

    handleSubmit =  () => {
        if(this.state.currentPlayers.includes("-1")){
           this.setState({error: 'All Players Must Pick A Vaild Character Name'})
        } else {
          this.props.updateselectedPlayers(this.state.currentPlayers)
          this.setState({redirect: true})
        }
    }

    render() {
        return (
            <section className="pick-player">
                <section className="plyer-picker-inside-section">
                    <h2 className="error-message">
                        {this.state.error}
                    </h2>
                    {this.populatePlayers()}
                        <button
                            type='button'
                            disabled={this.state.currentPlayers.includes("-1") || this.state.currentPlayers.length === 0 }
                            onClick={this.handleSubmit}
                            className="pick-player-submit"
                        >
                            Submit
                        </button>
                        {this.state.redirect && <Redirect to="/quickstart"/>}
                        <Link 
                            to="/" 
                            label="Home"
                            >
                            <button className="restart">
                                Restart
                            </button>
                        </Link>
                </section>
            </section>  
        )
    }
}

export default PickPlayer

PickPlayer.propTypes = {
    playerCount:PropTypes.number,
    updateselectedPlayers:PropTypes.func,
    characterNames: PropTypes.array
}