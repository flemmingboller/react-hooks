import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter'

function App() {
  const [count, useCount] = useState(0)

  return (
    <div>
      <p>{count}</p> <button onClick={() => useCount(count + 2)}>Add</button>{' '}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
