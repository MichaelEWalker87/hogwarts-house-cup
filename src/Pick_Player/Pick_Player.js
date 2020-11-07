import React, { Component } from 'react'

export class PickPlayer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentPlayers: [],
        }
    }

    populatePlayers = () => {
        let allPlayers = []
         for (let i = 0; i < this.props.playerCount; i++) {
            let playerNumber = (i)
            allPlayers.push(
                <section key={(playerNumber + 1)}>
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

    handleSubmit = () => {
        if(this.state.currentPlayers.includes("-1")){
            alert('All Players Must Pick A Vaild Character Name')
        } else {
          this.props.updateselectedPlayers(this.state.currentPlayers)
        }
    }

    render() {
        return (
            <section>
                {this.populatePlayers()}
                <button
                  type='button'
                  disabled={this.state.currentPlayers.length != this.props.playerCount}
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
            </section>  
        )
    }
}

export default PickPlayer
