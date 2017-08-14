import React from 'react'
import ReactDOM from 'react-dom'
import { Title } from './index.s'

const App = () => {
  return (
    <div>
      <Title>Hello</Title>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))