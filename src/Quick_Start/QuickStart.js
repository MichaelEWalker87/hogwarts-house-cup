import React from 'react'
import { Link } from 'react-router-dom';
import './QuickStart.css'

const QuickStart = () => {
  return(
    <section>
      <h3>
      Choose 'Start' and be taken directly to gameplay, 
      or select 'Rule' to customize the gameplay experience.
      </h3>
      <section>
        <label>
          Quickstart 
        </label>
        <Link 
          to="/gameplay"
          label="gameplay"
        >
          <button>
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
          <button>
            Rules
          </button>
        </Link>
      </section>
    </section>
  )
}
export default QuickStart