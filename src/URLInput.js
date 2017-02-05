import React from 'react'
import { Route } from 'react-router-dom'

const URLInput = () => (
  <Route render={({ location, replace }) => (
    <div>
      <h2>Pathname:</h2>
      <div>
        <input
          type='text'
          placeholder='Pathname'
          value={location.pathname}
          style={{ width: '100%' }}
          onChange={(event) => { replace(event.target.value) }}
          />
      </div>
    </div>
    )}
  />
)

export default URLInput
