import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import './Pick_Player.css'

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
                    <label>
                        Player {(playerNumber + 1)} select your character
                        <select 
                            name={(playerNumber)}
                            onChange={this.handleChange}
                        >
                            <option value={-1}>Pick A Character</option>
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
        console.log(this.lockPick())
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
                <h2>
                    {this.state.error}
                </h2>
                {this.populatePlayers()}
                    <button
                        type='button'
                        disabled={this.state.currentPlayers.includes("-1")}
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </button>
                    {this.state.redirect && <Redirect to="/quickstart"/>}
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