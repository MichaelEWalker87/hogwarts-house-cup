import React from 'react'

const PlayerAmount = () => {
    return (
        <section>
            <button>Submit</button>
            <label>Pick The Amount Of Players</label>
            <select>
                <option value={1} >1</option>
                <option value={2}>2</option>
            </select>
        </section>
    )
}

export default PlayerAmount


