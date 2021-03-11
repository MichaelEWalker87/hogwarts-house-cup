import React from 'react'
import { Link } from 'react-router-dom';
import '../SCSS/Base.scss';
import noGoodAudio from "../images/nogood.mp3"; 

const QuickStart = () => {
  return(
    <section className="quick-start">
      <section className="background-quickstart">
        <h3>
        Choose 'Start' and be taken directly to gameplay, 
        or select 'Rule' to customize the gameplay experience.
        </h3>
        <section className="quick-start-menu">
          <label>
            Quickstart 
          </label>
          <Link 
            to="/gameplay"
            label="gameplay"
          >
            <button className="quick-start-buttons">
              Start
            </button>
          </Link>
        </section>
        <section>
          <label className="add-rule-button">
            Add A Game Rule 
          </label>
          <Link 
            to="/rules"
            label="rules"
          >
            <button className="quick-start-buttons, pick-player-submit">
              Rules
            </button>
          </Link>
          <Link 
            to="/" 
            label="Home"
          >
            <button className='restart'>
                Restart
            </button>
          </Link>
        </section>
      </section>
      <audio src={noGoodAudio}  className="audio-no-good" controls type="audio/mpeg" autoPlay></audio>
    </section>
  )
}
export default QuickStart