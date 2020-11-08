import React from 'react'
import { Link } from 'react-router-dom';
import { questions } from '../Mock_Data/Mock_Data.js'


const Gameplay = () => { 

  const getRandomIndex = () => {
    let num = Math.floor(Math.random() * questions.length);
    return questions[num]
  };

  return (
    <section>
      <p>
        Game play
      </p>
      <label>
        {getRandomIndex()}
      </label>
      <button>

      </button>
      <Link 
        to="/" 
        label="Home"
      >
        <button>
          Go To Start
        </button>
      </Link>
    </section>
  )
}

export default Gameplay
