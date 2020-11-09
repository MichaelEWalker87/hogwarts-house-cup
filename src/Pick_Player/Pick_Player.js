import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

class PickPlayer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentPlayers: [],
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
            <section>
                <h2>
                    {this.state.error}
                </h2>
                {this.populatePlayers()}
                    <button
                    type='button'
                    disabled={this.state.currentPlayers.length != this.props.playerCount}
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
