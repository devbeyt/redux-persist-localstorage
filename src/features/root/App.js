import React from 'react'
import Theme from '../theme/Theme'
import Counter from '../counter/Counter'
import Todos from '../todos/Todos'




function App() {
  return (
    <div>
      <h1>Counter app</h1>
      <Counter/>
      <h1>Todos</h1>
      <Todos/>
      <h1>Theme</h1>
      <Theme/>
    </div>
  )
}

export default App