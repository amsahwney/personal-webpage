import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'

function Homepage() {
  return (
    <div>
        <h1>This is the homepage.</h1>
        <Link to="../about">About</Link>
    </div>
  )
}

export default Homepage