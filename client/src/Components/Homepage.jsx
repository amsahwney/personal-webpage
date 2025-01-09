import React from 'react'
import { Link } from 'react-router-dom'
import Newsletter from './Newsletter'

function Homepage() {
  return (
    <div>
        <h1>This is the homepage.</h1>
        <button> <Link to="../about">About</Link> </button>
        <br/>
        <button> <Link to="../gallery">Gallery</Link> </button>
        <br/>
        <button> <Link to="../letters">Don't Touch</Link> </button>

        <Newsletter />
    </div>
  )
}

export default Homepage