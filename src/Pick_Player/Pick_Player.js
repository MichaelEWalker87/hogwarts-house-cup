import React, { Component } from 'react'

export class PickPlayer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentPlayers: []
        }
    }
   

    populatePlayers = () => {
        let allPlayers = []
         for (let i = 0; i < this.props.playerCount; i++) {
             let playerNumber = i + 1
            allPlayers.push(
                <section>
                    <label>
                        Player {playerNumber} select your character
                        <select 
                            name={playerNumber}
                            onChange={this.handleChange}
                        >
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
        this.props.updateselectedPlayers(this.state.currentPlayers)
    }

    render() {
        return (
            <form>
                {this.populatePlayers()}
                <button
                  type='button'
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
            </form>  
        )
    }
}

export default PickPlayer
