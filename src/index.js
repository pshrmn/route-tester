import React from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

class TestRoute extends React.Component {
  state = {
    path: '',
    exact: false,
    strict: false
  }

  handleInput(event) {
    const target = event.target
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    })
  }

  render() {
    const {
      path,
      exact,
      strict
    } = this.state
    return (
      <Route path={path} strict={strict} exact={exact} children={({ match }) => (
        <div>
          <pre style={{ background: '#efefef' }}>
            <code>
              {'<Route'}
              <br />
              <label>{'  path="'}
                <input
                  type='text'
                  name='path'
                  value={path}
                  title='A path should begin with a forward slash (/)'
                  onChange={this.handleInput.bind(this)}
                  />{'"'}
              </label>
              <br />
              <label>{'  exact={'}
                <input
                  type='checkbox'
                  name='exact'
                  value={exact}
                  onChange={this.handleInput.bind(this)}
                  />
                {'}'}
              </label>
              <br />
              <label>{'  strict={'}
                <input
                  type='checkbox'
                  name='strict'
                  value={strict}
                  onChange={this.handleInput.bind(this)}
                  />
                {'}'}
              </label>
              <br />
              {'  />'}
            </code>
          </pre>
          <pre style={{
            color: match ? 'green' : 'red',
          }}>
            <code>
              { JSON.stringify(match, null, 2) }
            </code>
          </pre>
        </div>
      )} />
    )
  }
}

const MatchIndicator = ({ color }) => (
  <span style={{
    background: color,
    width: 25,
    height: 25,
    borderRadius: 15,
    display: 'inline-block'
  }}></span>
)

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

