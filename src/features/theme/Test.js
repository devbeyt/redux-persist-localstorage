import React from 'react'

function Test({bg}) {
  return (
    <h1 className={`${bg} themepage`}>{bg}</h1>
  )
}

export default Test