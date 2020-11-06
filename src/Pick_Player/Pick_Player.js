import React, { Component } from 'react'

export class PickPlayer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            selectePlayer: [],
        }
    }

    populateCharacters = () => {
        console.log(this.props.allCharacters)
       return this.props.allCharacters.map((character) => {
           return(<option value={character}>{character.name}</option>)
        })
    }

    populatePlayers = () => {
        let allPlayers = []
         for (let i = 0; i < this.props.playerCount; i++) {
            allPlayers.push(
                <section>
                    <p>Player {i + 1} select your character</p>
                    <select>
                        {this.populateCharacters()}
                    </select>
                </section>
            )
         }
         return allPlayers
    }
    
    render() {
        return (
            <section>
                {this.populatePlayers()}
                <button>
                    Submit
                </button>
            </section>
        )
    }
}

export default PickPlayer
