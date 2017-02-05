import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import TestRoute from './TestRoute'
import URLInput from './URLInput'

const App = () => (
  <div>
    <URLInput />
    <TestRoute />
  </div>
)

render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'))

