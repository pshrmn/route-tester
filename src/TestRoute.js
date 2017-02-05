import React from 'react'
import { Route } from 'react-router-dom'

export default class TestRoute extends React.Component {
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