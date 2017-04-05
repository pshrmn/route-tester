import React from 'react'
import { Route } from 'react-router-dom'

const URLInput = () => (
  <Route render={({ location, history }) => (
    <div id='url'>
      <h3>Pathname:</h3>
      <div>
        <input
          type='text'
          placeholder='Pathname'
          value={location.pathname}
          style={{ width: '100%' }}
          onChange={(event) => { history.replace(event.target.value) }}
          />
      </div>
    </div>
    )}
  />
)

export default URLInput
