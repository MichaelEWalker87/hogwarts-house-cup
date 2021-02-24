import React from 'react'
import { Link } from 'react-router-dom';
import './QuickStart.css'

const QuickStart = () => {
  return(
    <section className="quick-start">
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
        <label>
          Add A Game Rule 
        </label>
        <Link 
          to="/rules"
          label="rules"
        >
          <button className="quick-start-buttons">
            Rules
          </button>
        </Link>
        <Link 
          to="/" 
          label="Home"
        >
          <button>
              Restart
          </button>
        </Link>
      </section>
    </section>
  )
}
export default QuickStart