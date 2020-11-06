import React, { Component } from 'react'

export class PickPlayer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            selectedPlayer: [],
            players: 2,
        }
    }

    populateCharacters = () => {
        
    }

    populatePlayers = () => {
         for (let i = 0; i < this.state.players; i++) {
            return (
                <section>
                    <p>Player {i + 1} select your character</p>
                    <select>
                        <option value='Jame Potter'>Jame Potter</option>
                        <option value='Trevor'>Trevor</option>
                    </select>
                </section>
            )
         }
    }
    
    render() {
        return (
            <section>
                <p>pick player</p>
                <select>
                    <option value='Jame Potter'>Jame Potter</option>
                    <option value='Trevor'>Trevor</option>
                </select>
                <button>
                    Submit
                </button>
            </section>
        )
    }
}

export default PickPlayer
