import React from 'react'
import {render, cleanup, fireEvent} from 'react-testing-library'

afterEach(cleanup)

class Counter extends React.Component {
  state = {count: 0}
  handleClick = () => this.setState(({count}) => ({count: count + 1}))
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.handleClick}>click me</button>
      </div>
    )
  }
}

test('renders counter', () => {
  const {getByText} = render(<Counter />)
  getByText('0')
  fireEvent.click(getByText('click me'))
  getByText('1')
})

test('renders counter', () => {
  const {getByText} = render(<Counter />)
  getByText('0')
  fireEvent.click(getByText('click me'))
  getByText('1')
})
