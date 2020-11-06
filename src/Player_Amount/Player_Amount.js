import React from 'react'

const PlayerAmount = () => {
 return (
  <section>
    <label>Pick The Amount Of Players</label>
    <input
      type='number'
      name='Amount of Players Input'
      min={2}
      max={8}
      value=''
      onChange=''
    />
    <button
      role="button"
      type="button"
      className="login-submit"
      onClick=''
    >
      Submit
    </button>
  </section>
 )
}

export default PlayerAmount


