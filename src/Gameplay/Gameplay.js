import React from 'react'
import { Link } from 'react-router-dom';

const Gameplay = () => {
  return (
    <section>
      <p>
        Game play
      </p>
      <label>
        Go to pick player amount
      </label>
      <Link to="/">
        <button>
          Go To Start
        </button>
      </Link>
    </section>
  )
}

export default Gameplay
